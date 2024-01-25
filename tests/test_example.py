import functools
import shlex
import subprocess
from pathlib import Path

import pytest
import yaml
from copier import run_copy
from prompt_toolkit.validation import ValidationError

TOP = Path(__file__).absolute().parent.parent


def copy_project(
    project_path: Path,
    author_email="tom.cobb@diamond.ac.uk",
    author_name="Tom Cobb",
    component_owner="group:default/sscc",
    description="An expanded python-copier-template with all the options",
    distribution_name="dls-python-copier-template-example",
    docker=True,
    docs_type="sphinx",
    git_platform="github.com",
    github_org="DiamondLightSource",
    package_name="python_copier_template_example",
    repo_name="python-copier-template-example",
):
    answers = locals()
    answers.pop("project_path")
    run_copy(
        src_path=str(TOP),
        dst_path=project_path,
        data=answers,
        vcs_ref="HEAD",
        unsafe=True,
    )


def run_pipe(cmd: str, cwd=None):
    sp = subprocess.run(
        shlex.split(cmd),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        cwd=cwd,
    )
    output = sp.stdout.decode()
    assert sp.returncode == 0, output
    return output


def test_template(tmp_path: Path):
    project_path = tmp_path / "project"
    venv_path = tmp_path / "venv"
    copy_project(project_path)
    run = functools.partial(run_pipe, cwd=str(project_path))
    run(f"python -m venv {venv_path}")
    run(f"{venv_path}/bin/python -m pip install -e .[dev]")
    run(f"{venv_path}/bin/tox -p")


def test_bad_repo_name(tmp_path: Path):
    with pytest.raises(ValidationError, match="bad:thing is not a valid repo name"):
        copy_project(tmp_path, repo_name="bad:thing")


def test_example_repo_updates(tmp_path: Path):
    generated_path = tmp_path / "generated"
    example_url = (
        "https://github.com/DiamondLightSource/python-copier-template-example.git"
    )
    example_path = tmp_path / "example"
    copy_project(generated_path)
    run_pipe(f"git clone {example_url} {example_path}")
    with open(example_path / ".copier-answers.yml") as f:
        d = yaml.safe_load(f)
    d["_src_path"] = str(TOP)
    with open(example_path / ".copier-answers.yml", "w") as f:
        yaml.dump(d, f)
    run_pipe(f"git -C {example_path} commit -am 'Update src'")
    run_pipe(f"copier update --trust --vcs-ref=HEAD -A {example_path}")
    output = run_pipe(
        "diff -ur --exclude=.git --ignore-matching-lines='_commit: '"
        f" {generated_path} {example_path}"
    )
    assert not output, output


# TODO: check that copier update python-copier-template-example matches generated
