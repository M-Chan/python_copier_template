Search.setIndex({"docnames": ["explanations", "explanations/decisions", "explanations/decisions/0001-record-architecture-decisions", "explanations/decisions/0002-make-skeleton", "explanations/decisions/0003-docs-structure", "explanations/decisions/0004-why-src", "explanations/decisions/0005-pyproject-toml", "explanations/decisions/0006-setuptools-scm", "explanations/decisions/0007-dev-dependencies", "explanations/decisions/0008-use-tox", "explanations/decisions/0009-sphinx-theme", "explanations/decisions/0010-vscode-settings", "explanations/decisions/0011-requirements-txt", "explanations/decisions/0012-containers", "explanations/decisions/0013-switch-to-copier", "explanations/decisions/0014-split-ci-yaml", "explanations/structure", "explanations/why-use-template", "genindex", "how-to", "how-to/build-docs", "how-to/contribute", "how-to/coverage", "how-to/dev-install", "how-to/excalidraw", "how-to/lint", "how-to/lock-requirements", "how-to/make-release", "how-to/pypi", "how-to/run-tests", "how-to/static-analysis", "how-to/update-template", "index", "reference", "reference/standards", "tutorials", "tutorials/adopt-existing", "tutorials/create-new", "tutorials/installation"], "filenames": ["explanations.md", "explanations/decisions.md", "explanations/decisions/0001-record-architecture-decisions.md", "explanations/decisions/0002-make-skeleton.md", "explanations/decisions/0003-docs-structure.md", "explanations/decisions/0004-why-src.md", "explanations/decisions/0005-pyproject-toml.md", "explanations/decisions/0006-setuptools-scm.md", "explanations/decisions/0007-dev-dependencies.md", "explanations/decisions/0008-use-tox.md", "explanations/decisions/0009-sphinx-theme.md", "explanations/decisions/0010-vscode-settings.md", "explanations/decisions/0011-requirements-txt.md", "explanations/decisions/0012-containers.md", "explanations/decisions/0013-switch-to-copier.md", "explanations/decisions/0014-split-ci-yaml.md", "explanations/structure.md", "explanations/why-use-template.md", "genindex.md", "how-to.md", "how-to/build-docs.md", "how-to/contribute.md", "how-to/coverage.md", "how-to/dev-install.md", "how-to/excalidraw.md", "how-to/lint.md", "how-to/lock-requirements.md", "how-to/make-release.md", "how-to/pypi.md", "how-to/run-tests.md", "how-to/static-analysis.md", "how-to/update-template.md", "index.md", "reference.md", "reference/standards.rst", "tutorials.md", "tutorials/adopt-existing.md", "tutorials/create-new.md", "tutorials/installation.md"], "titles": ["Explanations", "Architectural Decision Records", "1. Record architecture decisions", "2. Make a skeleton repository", "3. Standard documentation structure", "4. Use a source directory", "5. Use pyproject.toml", "6. Use setuptools_scm", "7. Installing developer environment", "8. Use tox and pre-commit", "9. Sphinx theme", "10. Include vscode settings", "11. Pinning requirements", "12. Use containers", "13. Switch to copier", "14. Split up CI YAML", "Template Project Structure", "Why Use a Copier Template?", "Index", "How-to Guides", "Build the docs using sphinx", "Contribute to the template", "How to check code coverage", "Setup Developer Environment", "How to embed Excalidraw diagrams", "Run linting using pre-commit", "Lock requirements", "Make a release", "Creating a PyPI Token", "Run the tests using pytest", "Run static analysis using pyright", "How to update to the latest template structure", "python-copier-template", "Reference", "Standards", "Tutorials", "Adopt the template into an existing repo", "Create a new repo from the template", "Install template pre-requisites"], "terms": {"how": [0, 4, 5, 21, 28, 34, 37], "work": [0, 8, 11, 12, 13, 25, 26, 28, 29, 31, 32], "why": [0, 32], "wai": [0, 1, 5, 8, 9, 26, 32], "architectur": [0, 32], "decis": [0, 32], "record": [0, 32, 37], "templat": [0, 3, 14, 15, 19, 26, 35], "project": [0, 1, 2, 3, 4, 5, 6, 8, 13, 14, 17, 20, 21, 26, 28, 29, 37, 38], "structur": [0, 1, 3, 5, 10, 17, 19], "us": [0, 1, 2, 3, 4, 8, 10, 12, 14, 16, 19, 21, 23, 24, 26, 28, 32, 34, 37, 38], "copier": [0, 1, 21, 26, 31, 37], "ar": [1, 4, 5, 7, 9, 11, 12, 15, 20, 21, 28, 34], "made": [1, 2, 9, 26, 27], "throughout": 1, "": [1, 2, 3, 4, 5, 32], "lifetim": 1, "As": [1, 5, 21, 34], "keep": [1, 3, 32, 38], "track": [1, 9, 14, 17, 31], "we": [1, 2, 3, 5, 7, 8, 9, 12, 13, 14, 15, 21, 26], "adr": [1, 2], "list": [1, 8, 26, 32], "below": [1, 5], "1": [1, 34], "2": [1, 34], "make": [1, 11, 17, 19, 20, 24, 25, 32, 37, 38], "skeleton": [1, 4, 5, 8, 14, 17, 28], "repositori": [1, 5, 14, 17, 21, 25, 26, 32, 34], "3": [1, 16, 23, 34, 38], "standard": [1, 16, 20, 32, 33], "document": [1, 8, 9, 10, 14, 16, 17, 20, 24, 37], "4": [1, 16], "sourc": [1, 16, 20, 21, 23, 30, 32, 38], "directori": [1, 16, 20, 23, 34], "5": 1, "pyproject": [1, 8, 26], "toml": [1, 8, 26], "6": 1, "setuptools_scm": 1, "7": 1, "instal": [1, 5, 9, 13, 25, 26, 32, 35, 37], "develop": [1, 3, 5, 9, 11, 13, 16, 17, 19, 37], "environ": [1, 5, 11, 13, 19, 21, 26, 32, 37], "8": [1, 23, 38], "tox": [1, 11, 20, 22, 23, 25, 29, 30, 32], "pre": [1, 19, 21, 23, 32, 34, 35, 37], "commit": [1, 7, 12, 19, 21, 23, 26, 32, 34], "9": 1, "sphinx": [1, 16, 19, 23, 32, 34, 37], "theme": 1, "10": 1, "includ": [1, 9, 20, 32, 33], "vscode": [1, 9, 13, 21, 23, 32], "set": [1, 13, 16, 21, 22, 25, 26, 28, 32, 34, 37], "11": 1, "pin": [1, 26], "requir": [1, 4, 7, 9, 10, 11, 15, 19, 23, 24, 28, 32], "12": 1, "contain": [1, 14, 16, 17, 21, 23, 26, 34], "13": 1, "switch": 1, "14": 1, "split": [1, 32], "up": [1, 3, 13, 21, 28], "ci": [1, 5, 9, 11, 12, 13, 16, 21, 22, 32], "yaml": 1, "For": [1, 11, 21, 26, 34], "more": [1, 4, 19, 21, 28, 32, 38], "inform": [1, 4], "see": [1, 2, 4, 5, 6, 7, 9, 16, 20, 21, 27, 28, 32], "thi": [1, 2, 3, 4, 5, 7, 9, 12, 14, 16, 17, 20, 21, 23, 24, 25, 26, 27, 28, 31, 34, 37, 38], "blog": [1, 3], "michael": [1, 2], "nygard": [1, 2], "date": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "2022": [2, 3], "02": 2, "18": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "accept": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "need": [2, 3, 4, 5, 6, 8, 9, 12, 14, 21, 22, 26, 32, 37, 38], "describ": [2, 28], "articl": [2, 4, 5, 6], "link": [2, 4, 5, 6, 15, 21, 23, 28, 32], "abov": [2, 4, 5, 6, 13, 24, 25, 32], "To": [2, 9, 26, 27, 28, 31], "creat": [2, 5, 14, 19, 24, 26, 27, 35], "new": [2, 21, 23, 27, 28, 35, 38], "copi": [2, 3, 17, 25, 26, 31, 32, 37], "past": [2, 3, 17], "from": [2, 3, 7, 11, 15, 17, 20, 21, 25, 34, 35, 38], "exist": [2, 14, 15, 21, 32, 35, 38], "ones": 2, "06": 3, "mani": [3, 17], "start": [3, 17, 24, 32, 35], "some": [3, 9, 11, 15, 17, 21, 26, 29, 37], "kind": [3, 13, 17], "These": [3, 8, 17, 23], "defin": [3, 10, 17, 26, 34], "basic": [3, 17], "custom": [3, 17], "specif": [3, 17], "variabl": [3, 17], "can": [3, 5, 7, 8, 9, 12, 13, 14, 15, 17, 20, 21, 23, 25, 26, 28, 29, 30, 32, 37, 38], "add": [3, 7, 15, 17, 24, 25, 28], "code": [3, 5, 7, 11, 16, 17, 19, 20, 21, 23, 25, 32], "One": [3, 17], "exampl": [3, 17, 21, 26, 34], "i": [3, 4, 5, 9, 12, 17, 21, 22, 23, 24, 25, 26, 28, 29, 30, 34, 38], "cookiecutt": [3, 17], "The": [3, 4, 5, 9, 10, 14, 15, 16, 17, 20, 21, 22, 25, 26, 28, 32, 34, 37], "problem": [3, 15, 17, 26], "approach": [3, 4, 9, 17, 26, 28], "difficult": [3, 17, 21], "appli": [3, 14, 17, 31], "chang": [3, 9, 14, 17, 20, 24, 25, 26, 31, 32, 38], "have": [3, 9, 12, 17, 21, 23, 25, 26, 27, 28, 29, 32, 37, 38], "been": [3, 17, 26], "cut": [3, 17], "individu": [3, 17], "lead": [3, 17], "partial": [3, 17], "fix": [3, 9, 17, 26], "miss": [3, 17], "updat": [3, 8, 14, 17, 19, 21, 26, 32, 37, 38], "jaraco": 3, "git": [3, 7, 9, 23, 25, 32], "downstream": [3, 14, 17], "cli": [3, 5], "modul": [3, 9, 16, 32, 38], "eas": [3, 21], "adopt": [3, 14, 32, 35, 38], "2023": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "01": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "base": [4, 5, 8, 20], "organ": [4, 22, 28], "propos": [4, 21], "david": 4, "la": 4, "grand": 4, "unifi": 4, "theori": 4, "There": [4, 9, 12, 23, 26], "secret": [4, 22, 28], "understood": 4, "order": [4, 8, 12, 24, 34], "write": 4, "good": [4, 10, 26], "softwar": [4, 38], "isn": 4, "t": [4, 15, 21], "one": [4, 9, 21, 26, 32], "thing": [4, 9, 21, 25], "call": [4, 15], "four": [4, 32], "thei": [4, 5, 37], "tutori": [4, 32, 37, 38], "guid": [4, 21, 32, 34, 37], "technic": [4, 32, 33], "refer": [4, 32], "explan": [4, 32], "repres": 4, "differ": [4, 17], "purpos": 4, "function": [4, 29, 34], "creation": [4, 32], "understand": 4, "implic": 4, "help": [4, 9], "improv": 4, "most": [4, 9, 21], "often": 4, "immens": 4, "topic": 4, "decid": 5, "per": [5, 6], "hynek": 5, "summar": 5, "main": [5, 27], "advantag": [5, 9, 13], "cannot": 5, "shadow": 5, "packag": [5, 16, 26, 28, 32], "would": [5, 9, 21], "wa": [5, 9, 14, 15, 17], "root": [5, 16, 26], "mean": [5, 7, 13, 26, 28], "you": [5, 7, 9, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 37, 38], "run": [5, 7, 9, 15, 16, 19, 20, 21, 23, 26, 31, 32, 34], "test": [5, 8, 9, 11, 15, 19, 21, 26, 32], "against": [5, 9, 12], "bug": 5, "A": [5, 13, 15, 17, 27], "secondari": 5, "symmetri": 5, "go": [5, 26, 27, 37], "src": [5, 20], "doc": [5, 19, 21, 23, 24, 32, 34], "follow": [5, 16, 23, 24, 27, 32, 34, 37], "wheel": [5, 27], "job": [5, 15], "an": [5, 9, 14, 17, 20, 26, 32, 35, 38], "isol": [5, 13], "check": [5, 9, 15, 19, 23, 25, 29, 30, 32, 34], "install_requir": 5, "suffici": 5, "lock": [5, 12, 19, 32], "true": [5, 34], "doe": [5, 9, 25], "edit": [5, 25, 26, 27], "mode": 5, "time": [5, 9, 21, 25, 26], "modif": 5, "without": [5, 13, 21, 30], "reinstal": 5, "fals": 5, "regular": 5, "which": [5, 9, 14, 15, 17, 20, 23, 25], "all": [5, 9, 12, 16, 21, 25, 26, 28], "file": [5, 9, 11, 12, 16, 21, 22, 24, 25, 30], "distribut": 5, "where": [6, 21, 30], "put": 6, "python": [6, 7, 8, 9, 11, 16, 21, 23, 26, 27, 37], "configur": [6, 16, 21], "http": [6, 8, 9, 10, 20, 22, 24, 27, 32], "pep": [6, 8, 27], "org": [6, 8, 22, 27], "0518": 6, "mechan": [7, 8, 12, 14, 17, 26], "gener": [7, 12, 21, 22, 27], "version": [7, 12, 26], "number": [7, 9, 27], "tag": [7, 27, 31], "setuptool": [7, 32], "scm": [7, 32], "pypa": 7, "automat": [7, 25, 28], "verifi": [7, 9], "releas": [7, 12, 15, 19, 26, 31, 32, 33], "setup": [7, 8, 19, 32, 37], "tool": [7, 9, 11, 32, 34], "suffix": 7, "untag": 7, "provid": [8, 9, 13, 26, 28, 32], "option": [8, 15, 27, 32], "depend": [8, 12, 13], "621": 8, "ad": [8, 9], "0621": 8, "suppli": [8, 27], "under": [8, 9, 23, 25, 32], "titl": [8, 27, 34], "dev": [8, 23, 26, 32], "enabl": [8, 11, 16, 24, 25, 37], "build": [8, 9, 12, 13, 15, 19, 26, 32, 34], "its": [8, 21], "ani": [8, 20, 21, 25, 26, 31, 38], "virtual": [8, 13], "command": [8, 22, 25, 37], "bash": 8, "pip": [8, 12, 14, 17, 23, 26, 32, 38], "e": [8, 20, 22, 23, 25, 26, 29, 30], "easi": 9, "local": [9, 16, 20, 23, 32], "same": [9, 13, 21, 26, 27, 37], "rapid": 9, "inner": 9, "loop": 9, "experi": [9, 11], "autom": 9, "parallel": [9, 23], "wiki": 9, "en": 9, "latest": [9, 12, 19, 26, 32], "hook": [9, 21, 25], "about": [9, 37], "pytest": [9, 16, 19, 22, 23, 32], "black": [9, 34], "pyright": [9, 19, 23, 32, 34], "flake8": [9, 34], "isort": [9, 34], "initi": [9, 14, 17, 32], "took": [9, 17], "integr": [9, 11, 16, 32], "everyth": 9, "had": [9, 14, 15, 17], "plugin": 9, "catch": 9, "report": [9, 22, 29], "failur": 9, "each": [9, 25, 28], "take": [9, 13, 23, 26, 38], "longer": 9, "than": 9, "also": [9, 20, 21, 25, 29, 32], "state": 9, "public": 9, "stabl": 9, "api": [9, 20, 32, 33, 34], "so": [9, 23, 26, 32, 37, 38], "did": 9, "recommend": [9, 11, 21, 23, 38], "taken": 9, "address": 9, "tree": 9, "rearrang": 9, "If": [9, 20, 21, 22, 25, 26, 28], "still": [9, 21], "save": [9, 24, 25, 32], "those": 9, "other": [9, 11, 28, 37], "editor": [9, 11, 16], "anoth": [9, 21], "solut": 9, "enter": [9, 23], "allow": [9, 13, 23, 38], "just": [9, 11, 25], "well": [9, 10, 14, 17], "final": 9, "move": [9, 14], "out": [9, 26], "becaus": [9, 26, 28], "quit": [9, 26], "long": [9, 15], "therefor": 9, "intrus": [9, 25], "invok": 9, "p": [9, 23], "graph": 9, "now": [9, 17, 23, 25, 37, 38], "look": [9, 10, 26, 29], "like": [9, 14, 17, 21, 25, 29], "workflow": [9, 15, 16, 25], "issu": [9, 12, 26, 30], "until": 9, "succe": 9, "them": [9, 12, 29, 30], "common": [9, 21], "push": [9, 15, 26, 27], "remot": 9, "onc": [9, 15, 26, 37], "multipl": [9, 15], "matrix": 9, "befor": [9, 38], "github": [9, 21, 22, 23, 27, 28, 32], "non": 9, "critic": 9, "avoid": 9, "mistak": 9, "pydata": 10, "here": [10, 26, 32, 35], "readthedoc": 10, "io": [10, 13, 22, 32], "nice": 10, "ha": [10, 16, 21, 26, 27], "navig": 10, "featur": 10, "user": [11, 12, 13, 19, 25, 28, 32, 35], "coupl": 11, "neat": 11, "id": 11, "folder": [11, 13], "repo": [11, 12, 14, 15, 17, 21, 22, 25, 26, 32, 35, 38], "json": [11, 25], "extens": [11, 34], "best": [11, 14, 17, 21, 26], "launcher": 11, "debug": [11, 16], "overrid": [11, 12], "coverag": [11, 19, 29, 32], "verif": 11, "match": [11, 30, 37], "task": [11, 21, 32], "launch": [11, 13], "should": [11, 24, 26], "find": [11, 25, 29], "unaffect": 11, "abil": 12, "guarante": [12, 26], "rebuild": [12, 20, 24], "By": [12, 26], "default": [12, 31], "behaviour": [12, 21], "when": [12, 14, 17, 21, 23, 26, 29], "everi": [12, 25, 26], "txt": [12, 23, 26], "freez": [12, 26], "publish": [12, 13, 26, 27, 28], "asset": [12, 26], "request": [12, 21], "download": [12, 26], "next": 12, "less": 12, "overhead": 12, "manag": [12, 32], "incom": [12, 26], "highlight": [12, 30], "earli": [12, 26], "around": 12, "quickli": 12, "singl": [13, 15, 16, 26, 28], "dockerfil": 13, "two": 13, "minim": [13, 23], "runtim": 13, "execut": [13, 38], "applic": [13, 26], "system": 13, "devcontain": [13, 21, 23, 26], "ghcr": 13, "label": 13, "cloud": 13, "nativ": 13, "2024": [14, 15], "previou": [14, 17, 26, 31], "attempt": [14, 17], "python3": [14, 17, 23, 38], "fork": [14, 17], "merg": [14, 17], "encourag": [14, 17], "led": [14, 17], "confus": [14, 17], "who": [14, 17], "actual": [14, 17], "contribut": [14, 17, 19, 32], "messi": [14, 17], "text": [14, 17], "name": [14, 16, 17, 22, 24, 28, 37], "upstream": [14, 17, 31], "give": [14, 17, 31, 37], "both": [14, 16, 17], "world": [14, 17], "engin": [14, 17, 38], "expand": [14, 17, 37], "diff": [14, 17], "process": [14, 20, 21, 34], "31": 15, "monolith": 15, "want": [15, 21], "part": 15, "couldn": 15, "easili": 15, "reus": 15, "It": [15, 21, 24, 25, 29, 30, 31, 32, 38], "hard": [15, 26], "read": 15, "top": [15, 32], "level": [15, 16], "break": [15, 26], "reusabl": 15, "artifact": 15, "period": 15, "week": 15, "aren": 15, "broken": 15, "typic": [16, 25, 32, 35], "detail": [16, 32], "hold": 16, "continu": [16, 23], "static": [16, 19, 20, 23, 32, 34], "analysi": [16, 19, 23, 32, 34], "being": [17, 25], "practic": [19, 21, 32], "step": [19, 23, 32], "experienc": [19, 32], "emb": [19, 32], "excalidraw": [19, 32], "diagram": [19, 32], "lint": [19, 23, 32, 34], "pypi": [19, 27, 32], "token": [19, 27, 32], "pull": [20, 21], "docstr": [20, 34], "built": 20, "html": [20, 24], "open": [20, 21, 23, 24], "web": 20, "brows": 20, "firefox": 20, "index": [20, 32, 33], "watch": 20, "your": [20, 22, 24, 25, 26, 28, 31], "whenev": 20, "reload": 20, "browser": [20, 24], "page": [20, 26, 27, 28, 32, 34, 37], "view": 20, "localhost": 20, "8000": 20, "too": [20, 25], "tell": 20, "welcom": 21, "handl": [21, 25], "through": [21, 23, 38], "pleas": [21, 27, 34], "great": 21, "idea": [21, 26], "involv": 21, "big": 21, "ticket": 21, "sure": [21, 24], "don": 21, "spend": 21, "someth": 21, "might": 21, "fit": 21, "scope": [21, 28], "offer": 21, "place": [21, 26], "ask": [21, 37], "question": [21, 37], "share": 21, "end": 21, "obviou": 21, "close": 21, "rais": 21, "instead": [21, 28], "togeth": 21, "agre": 21, "variou": 21, "demonstr": 21, "action": [21, 22, 28, 32], "desir": 21, "scratch": 21, "produc": 21, "result": [21, 24, 25], "correctli": 21, "branch": [21, 27], "diamondlightsourc": [21, 22, 32, 37], "vc": 21, "ref": 21, "branch_nam": 21, "container": 21, "suit": 21, "own": 21, "line": [22, 32, 34, 38], "cov": [22, 29], "xml": [22, 29], "upload": [22, 27], "servic": 22, "host": [22, 23], "visit": [22, 32], "app": 22, "account": [22, 28], "gh": [22, 32, 37], "org_nam": 22, "store": [22, 28], "codecov_token": 22, "com": [22, 24], "instruct": [23, 32], "get": [23, 26, 27, 38], "first": 23, "interfac": 23, "do": [23, 25, 26, 28, 30, 32], "ssh": 23, "kei": [23, 28], "choos": [23, 27, 37], "either": 23, "machin": 23, "venv": [23, 32, 38], "later": [23, 24, 37, 38], "virtualenv": [23, 38], "m": [23, 38], "bin": [23, 38], "activ": [23, 32, 38], "c": 23, "constraint": [23, 26], "click": [23, 24, 26, 27], "reopen": 23, "prompt": [23, 31], "termin": [23, 38], "off": 24, "eyj2zxjzaw9uijoimsisimvuy29kaw5nijoiynn0cmluzyisimnvbxbyzxnzzwqionrydwusimvuy29kzwqioij4no1axxobofx1mdaxnh3pr8i4r3wkvqw": 24, "pu13j1sntep02mans0oa2drcdtawmthcxmd56v": 24, "r8axqmbcdtawmddun9ntdouhtjdoqvfixhuwmdfl6d5cdtawmgjft7a3xhuwmda3": 24, "c08xhuwmde4pn9cdtawmwvcdtawmdtxnlx1mdaxyov": 24, "6l5ccp5cdtawmtbtl0gahumsu3b5nswl1cur0zyfz8": 24, "fptomxhuwmdfkl5ktwufcdtawmttmgjjpno5pfb29": 24, "bx8q3tcv": 24, "bcdtawmgx5x1x1mdawzvh49q": 24, "tj1x1mdaxzc3pxrtmjkodklqcvsb4ottlyt90xfzrvqzkdx1t2cvzdx1cdtawmtx6": 24, "vs3ovrbnfxij9o80ejgk6hcdtawmtjcqvqype0ugpdjlktf0e9cxi5cdtawmdjaxhuwmdfi": 24, "sz1lizpsoj9xg6tp26czd1uz9tgzsmoxhuwmdfh5zfrco1cxg": 24, "6sinby5t3d2bsrnvfy1x1mdaxmr2ihqwhnuzjicvwxhuwmdezva3j3pxcvfhcdtawmdlkmhlcdtawmtq2zvf9cuk": 24, "ne8": 24, "ddp53x1cdtawmdzzcvgzlfxiikedxhuwmdexxyjcdtawmtoh46rhufx1mdawmkki2xqyxku7kfx1mdawn1x0hvx1mdaxodw0mnvtbpcxdz13oywws1ms4qumi9tdpoyqt55": 24, "hn5cdtawmwsexhuwmdflvp1e4zfsy3bcdtawmtjkf1rmw": 24, "7ipmlynah6vj1df99cdtawmtu8xhuwmdbmrnp7rstcdtawmt": 24, "777yrepi3tuavkhzdlr7dlx1mdaxno5qt737zyzuyu67y3lcik6vzfx1mdawmisplhm4uvx1mdaxof": 24, "oznhcdtawmtffpi3xlszsbnxsbujl": 24, "vk35m5cdeviwyheilzqhnncdtawmtzcblx1mdawnsgk4ei4zk8sk3iulzkoppr299pdniprfjnixhuwmde4xophqfl3imtynpbhxhuwmdexzjnbxhuwmdawj6ua50nyvkh5b9s8": 24, "fki": 24, "v": 24, "t07xomjtcdtawmtu": 24, "bpat0urulr9mzrmw11x1mdaxmzkqjghcdtawmwgc5w6av1xiyz": 24, "mj7rpahh1voz3oetcbldlveuxwagzozcp6xchxcjcxhuwmde4zvx1mdawnnvqxhuwmdezd15ozedk5uitym4wv": 24, "utnpjbxhuwmdew": 24, "8agtrg7hvxip4hrn3s1r95x36nwq": 24, "70lry": 24, "teen": 24, "sn48pgwoj99m75cdtawmtm3vx": 24, "eandcxj3vzu8hfcwng5xcp6qtflxuhds4buvcdtawmtnozz3x": 24, "1m": 24, "j4pyktypxhuwmdfmudrsxulcdtawmwzhobh2kkn7konr": 24, "edcivwfs5": 24, "a0fxmhezauzjmxhuwmde2y3tuxhuwmda1n5fr8codcfwhky648avirzvhxhuwmdayxhuwmda2vyc4tnaddcjcdtawmtfczo5hcfx1mdawmomzxhuwmde4xfza4fxuxhuwmda0v7cpkthtrvx1mdawzvx1mdawnvlcdtawmthyxhuwmde0yoncdtawmtg2": 24, "gdy6fo1pkek8e5cdtawmdkz3h4oulx0xhuwmdfjspbcdtawmtzbdlx1mdaxmrhcdtawmdmlichcdtawmdfdxhrcdtawmdrkofccxhuwmdawlqu9vfug2fx1mdaxmwjcdtawmgbxxhuwmdewxgjksje1u23i3noh3xpcdtawmtpw3jlsxhuwmde2nlc9tvtaqlx1mdawmlx09ly97na0vvn3ivaoguncdfx1mdaxmkhq0enb": 24, "3cpzvvcdtawmdrkofbcdtawmdl7z4ru59tm2gpcdtawmtbcdtawmdfzvm": 24, "olx1mdaxzw9cdtawmdbh4wxcdtawmthpqpporlv35uncxhuwmda0kmtzowodzue1": 24, "nl09enpwwr0ffx6ffx1mdaxmtxexhuwmda3izo9il4t3fh": 24, "9mekmcu6h0mhvulcdtawmgz2tfuv": 24, "pimx9nphuxhn4pcdtawmthcdtawmtnh4lano1x1mdaxy2dj5un3ouinp": 24, "lhs1x1mdaxzj9i": 24, "onb6mfmllx1mdawnfxijvx1mdaxmfxmxhuwmdbl3kmxcmffxg6gj8cdklx1mdawm": 24, "fomr6xojcdtawmtjiqnbcdtawmtgqgfx1mdaxmqamnel9xhuwmdflxhuwmda0xhuwmda2jfx1mdaxmoghrlx1mdaxmey5ivxupvcp0dncdtawmtddmckgxqbcdtawmdrcdtawmduknfx1mdaxmorcdtawmwvcdtawmdsosvx1mdaxy1x1mdaxyzhcbmjukkaxmocgxfxcdtawmdjcdtawmwgyxg5gvixhjajgan1cdtawmdmvyhi1qsrfk4jtgzcgphzg64ncdtawmwrcdtawmdbe81x1mdawn8jvnxipxhuwmde0iftcdtawmdashr8vpo7op3uvbollsz3": 24, "ct": 24, "7unwps7do3": 24, "hyh4p2": 24, "1x1mdawmwrornqlqfm2qvxukfxy7feavcfajprissvd": 24, "pcdtawmwplzusqpuy6nfx1mdaxnsrcdtawmwpup1t0xgzcdtawmgiyoadcdtawmti49lx1mdawmywxgafcdtawmdrcdtawmdpwkzhcdtawmtrv299z4gpcdtawmwoqnvx1mdaxntt7": 24, "oqu6txkmn14xhuwmda2w9fk2zdcdtawmdbcdtawmwvcdtawmdfaxrttpj5cdtawmdrohvx1mdaxykfr6jja3kk2xhuwmdfk9srcdtawmtbcznnurkcvvwi": 24, "h1x1mdaxzxlcdtawmdg0qnd4ndejxgjcdtawmdcmylb6": 24, "ct4kohpvx1mdaxmoa332p0wgmgxhuwmdfl9vq0kxl0wfx1mdawm9ehxhuwmdaz10dcdtawmddxx35cdtawmwbrxhuwmdazxhuwmdbmq1xmbczvnxipva2txhuwmdfisfx1mdaxyf6": 24, "yht993ktynt63k5czks50yjumrqz5ltosezlxhuwmde1xg6p1tpsnlozx1xyrvgj": 24, "vx1mdawn": 24, "iuxhuwmdezxhuwmdexrvx1mdawneji0oo6y1xdxhuwmde0imjguesyxhuwmde5o1x1mdaxzewjnclrj1x1mdaxy1x1mdaxmiuwvqmnejjccrpa80niffx1mdaxy95cdtawmtzgm08": 24, "ytbf3flcdtawmtjdwetcxnxin1xuj8xkxhuwmda3nry3sfx1mdawn": 24, "ulyeppjsralpt9kki7tfx1mdaxnmh7y6fmao": 24, "povxc3zr2": 24, "vx1mdaxmm2qpoekjn3opd6ze3svvev916ncdtawmdn68plm": 24, "lsz": 24, "bb": 24, "si8u": 24, "uhcbjnmxhuwmde4xsz4mlzkpdbkd79u1a0qkzlcdtawmtjs4xvcdj6p17xef1bbxhuwmde4xhuwmde2qj18hkcocwpq": 24, "i5vufm": 24, "oqo8mcmkzc2irvx1mdaxzm32uj9bd8fiwj3px7len8hqe9hbzvx1mdaxofxcvwi75lx1mdaxm8dxxg5ykb3cj8tt9ou3rw9": 24, "xhuwmdazntdm0sj9": 24, "thisthat": 24, "imag": 24, "scene": 24, "checkbox": 24, "load": [24, 38], "back": [24, 26], "wish": [24, 38], "export": 24, "svg": 24, "insid": [24, 32], "raw": 24, "my": [24, 32, 37], "prefer": 24, "convent": [24, 34], "over": 24, "direct": 24, "retain": 24, "font": 24, "ruff": [25, 32], "Or": 25, "possibl": [25, 26], "clone": 25, "try": [25, 26], "anyth": 25, "left": 25, "review": [25, 27], "formatt": 25, "auto": 25, "remov": 25, "unus": 25, "import": [25, 34], "while": 25, "design": 26, "onli": [26, 28], "tabl": 26, "In": 26, "librari": 26, "leav": 26, "minimum": 26, "widest": 26, "rang": 26, "compat": 26, "avail": 26, "after": 26, "futur": 26, "mai": [26, 38], "correct": 26, "resolv": 26, "howev": 26, "consum": 26, "simpli": 26, "minor": 26, "reason": 26, "success": 26, "quick": 26, "show": 26, "exclud": 26, "full": 26, "sub": 26, "lockfil": 26, "pass": 26, "specifi": 26, "unlock": 26, "indic": 26, "restor": 26, "checklist": 27, "ensur": 27, "previous": 27, "pep440": 27, "compliant": 27, "0440": 27, "draft": 27, "chose": [27, 37], "note": [27, 28, 32, 33], "effect": 27, "except": 27, "sdist": 27, "author": 28, "access": [28, 32], "simplest": 28, "gain": 28, "permiss": 28, "altern": 28, "secur": 28, "bad": 28, "actor": 28, "obtain": 28, "affect": 28, "alreadi": 28, "create_account": 28, "learn": 28, "adding_a_token": 28, "ignor": 28, "section": 28, "regard": 28, "pypi_token": 28, "pypi_api_token": 28, "done": [29, 30], "error": 29, "fulli": 29, "commandlin": 29, "type": [30, 32, 34, 38], "definit": 30, "potenti": 30, "fetch": 31, "answer": [31, 37], "again": 31, "diamond": [32, 38], "opinion": 32, "pure": 32, "sync": [32, 38], "inspir": 32, "cherri": 32, "pick": 32, "format": [32, 34], "deploy": 32, "current": 32, "construct": 32, "yet": 32, "ac": 32, "uk": 32, "mark": 32, "fill": 32, "mkdir": [32, 37], "path": [32, 37, 38], "trust": 32, "argument": 32, "pipx": 32, "categori": 32, "bar": 32, "requisit": [32, 35, 37], "usag": [32, 35], "materi": [32, 33], "conform": 34, "style": 34, "napoleon": 34, "googl": 34, "consid": 34, "hint": 34, "signatur": 34, "def": 34, "func": 34, "arg1": 34, "str": 34, "arg2": 34, "int": 34, "bool": 34, "summari": 34, "extend": 34, "descript": [34, 37], "arg": 34, "return": 34, "valu": 34, "extract": 34, "underlin": 34, "headl": 34, "head": 34, "todo": 36, "blank": 37, "owner": 37, "earlier": 37, "gave": 37, "At": 38, "recent": 38, "interfer": 38, "deactiv": 38, "virual": 38, "perform": 38, "conda": 38, "exit": 38, "pipenv": 38}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"explan": 0, "architectur": [1, 2], "decis": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "record": [1, 2], "1": 2, "statu": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "context": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "consequ": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "2": 3, "make": [3, 21, 27], "skeleton": 3, "repositori": [3, 23], "3": 4, "standard": [4, 34], "document": [4, 32, 34], "structur": [4, 16, 31, 32], "4": 5, "us": [5, 6, 7, 9, 13, 17, 20, 25, 29, 30], "sourc": 5, "directori": 5, "5": 6, "pyproject": 6, "toml": 6, "6": 7, "setuptools_scm": 7, "7": 8, "instal": [8, 23, 38], "develop": [8, 21, 23, 32], "environ": [8, 23, 38], "8": 9, "tox": 9, "pre": [9, 25, 38], "commit": [9, 25], "detail": 9, "9": 10, "sphinx": [10, 20], "theme": 10, "10": 11, "includ": 11, "vscode": [11, 16, 25], "set": 11, "11": 12, "pin": 12, "requir": [12, 26], "12": 13, "contain": 13, "13": 14, "switch": 14, "copier": [14, 17, 32, 38], "14": 15, "split": 15, "up": 15, "ci": [15, 26], "yaml": 15, "templat": [16, 17, 21, 31, 32, 36, 37, 38], "project": [16, 32], "src": 16, "test": [16, 23, 29], "doc": [16, 20], "github": [16, 37], "specif": 16, "folder": 16, "devcontain": 16, "why": 17, "index": 18, "how": [19, 22, 24, 31, 32], "guid": 19, "build": [20, 23], "autobuild": 20, "contribut": 21, "issu": [21, 25], "discuss": 21, "get": [21, 37], "chang": 21, "check": [21, 22, 38], "your": [21, 37, 38], "befor": 21, "pr": 21, "inform": 21, "code": [22, 34], "coverag": 22, "ad": 22, "codecov": 22, "token": [22, 28], "setup": 23, "clone": 23, "depend": [23, 26], "emb": 24, "excalidraw": 24, "diagram": 24, "run": [25, 29, 30], "lint": 25, "fix": 25, "support": 25, "lock": 26, "introduct": 26, "find": 26, "file": 26, "appli": 26, "remov": 26, "from": [26, 32, 37], "releas": 27, "creat": [28, 32, 37, 38], "pypi": 28, "pytest": 29, "static": 30, "analysi": 30, "pyright": 30, "updat": 31, "latest": 31, "python": [32, 38], "new": [32, 37], "via": 32, "portal": 32, "commandlin": 32, "i": 32, "refer": 33, "tutori": 35, "adopt": 36, "an": 36, "exist": 36, "repo": [36, 37], "upload": 37, "sete": 37, "start": 37, "requisit": 38, "version": 38, "virtual": 38, "conclus": 38}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Explanations": [[0, "explanations"]], "Architectural Decision Records": [[1, "architectural-decision-records"]], "1. Record architecture decisions": [[2, "record-architecture-decisions"]], "Status": [[2, "status"], [3, "status"], [4, "status"], [5, "status"], [6, "status"], [7, "status"], [8, "status"], [9, "status"], [10, "status"], [11, "status"], [12, "status"], [13, "status"], [14, "status"], [15, "status"]], "Context": [[2, "context"], [3, "context"], [4, "context"], [5, "context"], [6, "context"], [7, "context"], [8, "context"], [9, "context"], [10, "context"], [11, "context"], [12, "context"], [13, "context"], [14, "context"], [15, "context"]], "Decision": [[2, "decision"], [3, "decision"], [4, "decision"], [5, "decision"], [6, "decision"], [7, "decision"], [8, "decision"], [9, "decision"], [10, "decision"], [11, "decision"], [12, "decision"], [13, "decision"], [14, "decision"], [15, "decision"]], "Consequences": [[2, "consequences"], [3, "consequences"], [4, "consequences"], [5, "consequences"], [6, "consequences"], [7, "consequences"], [8, "consequences"], [9, "consequences"], [10, "consequences"], [11, "consequences"], [12, "consequences"], [13, "consequences"], [14, "consequences"], [15, "consequences"]], "2. Make a skeleton repository": [[3, "make-a-skeleton-repository"]], "3. Standard documentation structure": [[4, "standard-documentation-structure"]], "4. Use a source directory": [[5, "use-a-source-directory"]], "5. Use pyproject.toml": [[6, "use-pyproject-toml"]], "6. Use setuptools_scm": [[7, "use-setuptools-scm"]], "7. Installing developer environment": [[8, "installing-developer-environment"]], "8. Use tox and pre-commit": [[9, "use-tox-and-pre-commit"]], "Decision detail": [[9, "decision-detail"]], "9. Sphinx theme": [[10, "sphinx-theme"]], "10. Include vscode settings": [[11, "include-vscode-settings"]], "11. Pinning requirements": [[12, "pinning-requirements"]], "12. Use containers": [[13, "use-containers"]], "13. Switch to copier": [[14, "switch-to-copier"]], "14. Split up CI YAML": [[15, "split-up-ci-yaml"]], "Template Project Structure": [[16, "template-project-structure"]], "src": [[16, "src"]], "tests": [[16, "tests"]], "docs": [[16, "docs"]], ".github": [[16, "github"]], "VSCode specific folders": [[16, "vscode-specific-folders"]], ".devcontainer": [[16, "devcontainer"]], ".vscode": [[16, "vscode"]], "Why Use a Copier Template?": [[17, "why-use-a-copier-template"]], "Index": [[18, "index"]], "How-to Guides": [[19, "how-to-guides"]], "Build the docs using sphinx": [[20, "build-the-docs-using-sphinx"]], "Autobuild": [[20, "autobuild"]], "Contribute to the template": [[21, "contribute-to-the-template"]], "Issue or Discussion?": [[21, "issue-or-discussion"]], "Getting changes into the template": [[21, "getting-changes-into-the-template"]], "Checking your changes before making a PR": [[21, "checking-your-changes-before-making-a-pr"]], "Developer Information": [[21, "developer-information"]], "How to check code coverage": [[22, "how-to-check-code-coverage"]], "Adding a Codecov Token": [[22, "adding-a-codecov-token"]], "Setup Developer Environment": [[23, "setup-developer-environment"]], "Clone the repository": [[23, "clone-the-repository"]], "Install dependencies": [[23, "install-dependencies"]], "Build and test": [[23, "build-and-test"]], "How to embed Excalidraw diagrams": [[24, "how-to-embed-excalidraw-diagrams"]], "Run linting using pre-commit": [[25, "run-linting-using-pre-commit"]], "Running pre-commit": [[25, "running-pre-commit"]], "Fixing issues": [[25, "fixing-issues"]], "VSCode support": [[25, "vscode-support"]], "Lock requirements": [[26, "lock-requirements"]], "Introduction": [[26, "introduction"]], "Finding the lock files": [[26, "finding-the-lock-files"]], "Applying the lock file": [[26, "applying-the-lock-file"]], "Removing dependency locking from CI": [[26, "removing-dependency-locking-from-ci"]], "Make a release": [[27, "make-a-release"]], "Creating a PyPI Token": [[28, "creating-a-pypi-token"]], "Run the tests using pytest": [[29, "run-the-tests-using-pytest"]], "Run static analysis using pyright": [[30, "run-static-analysis-using-pyright"]], "How to update to the latest template structure": [[31, "how-to-update-to-the-latest-template-structure"]], "python-copier-template": [[32, "python-copier-template"]], "Create a new project via Developer Portal": [[32, "create-a-new-project-via-developer-portal"]], "Create a new project from the commandline": [[32, "create-a-new-project-from-the-commandline"]], "How the documentation is structured": [[32, "how-the-documentation-is-structured"]], "Reference": [[33, "reference"]], "Standards": [[34, "standards"]], "Code Standards": [[34, "code-standards"]], "Documentation Standards": [[34, "documentation-standards"]], "Tutorials": [[35, "tutorials"]], "Adopt the template into an existing repo": [[36, "adopt-the-template-into-an-existing-repo"]], "Create a new repo from the template": [[37, "create-a-new-repo-from-the-template"]], "Uploading to GitHub": [[37, "uploading-to-github"]], "Setings": [[37, "setings"]], "Getting started with your new repo": [[37, "getting-started-with-your-new-repo"]], "Install template pre-requisites": [[38, "install-template-pre-requisites"]], "Check your version of python": [[38, "check-your-version-of-python"]], "Create a virtual environment": [[38, "create-a-virtual-environment"]], "Installing copier": [[38, "installing-copier"]], "Conclusion": [[38, "conclusion"]]}, "indexentries": {}})