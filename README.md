# ReSpec new document template to use with cookiecutter

A [cookiecutter](cookiecutter.readthedocs.io) template for creating a new, CROW-style, ReSpec document.
The [stichting-crow/respec-template] uses this template for new documents inside a repository.

> **Wat betekent dit voor mij**:
>
> - Voor een nieuw project: volg [stichting-crow/respec-repo-template].
> - Voor een nieuw document binnen een bestaand project: volg onderstaand stappenplan.

## Usage

There is no need to clone this repository.
Use the provided GitHub Action _New document_ if you're using a recent fork of [stichting-crow/respec-template].

Else, run the below function from the command line (requires `pipx`).

```cli
$ pipx install cookiecutter gh:stichting-crow/respec-document-template
```

[stichting-crow/respec-repo-template]: https://github.com/stichting-crow/respec-repo-template
[respec-template-generate]: https://github.com/stichting-crow/respec-repo-template/generate
