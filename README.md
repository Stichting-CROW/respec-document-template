# ReSpec new document template to use with cookiecutter

A [cookiecutter](cookiecutter.readthedocs.io) template for creating a new, CROW-style, ReSpec document.
The [stichting-crow/respec-repo-template] uses this template for new documents inside a repository.

> **Wat betekent dit voor mij**:
>
> - Voor een nieuw project: volg het stappenplan op [stichting-crow/respec-repo-template].
> - Voor een nieuw document binnen een bestaand project: 
>   - Ga op de GitHub-pagina van de repository naar de tab _Actions_, naar de workflow _New document_ en klik op _Run workflow_.
>   - Of voer onderstaande CLI-commando uit.

## Usage

There is no need to clone this repository.
Use the provided GitHub Action _Nieuw document toevoegen_ if you're using a recent fork of [stichting-crow/respec-repo-template].

Else, run the below function from the command line (requires `pip`).

```cli
$ cd docs/
$ pip install cookiecutter
$ cookiecutter gh:stichting-crow/respec-document-template
```

[stichting-crow/respec-repo-template]: https://github.com/stichting-crow/respec-repo-template
[respec-repo-template-generate]: https://github.com/stichting-crow/respec-repo-template/generate
