var respecConfig = {
  // => https://github.com/stichting-crow/respec/wiki
  specStatus: "{% if cookiecutter.on_review_track == 'true' %}WD{% else %}DRAFT{% endif %}",
  shortName: "{{ cookiecutter.repository_name }}/{{ cookiecutter._document_slug }}",
  specType: "{{ cookiecutter._spec_type }}", // vrije tekst
  imprint: "{{ cookiecutter.publisher }}",
  editors: [
    {
      name: "{{ cookiecutter.first_editor }}", // verplicht, de rest is optioneel
    },
  ],
  github: "https://github.com/Stichting-CROW/{{ cookiecutter.repository_name }}",
  license: "{{ cookiecutter.license }}",
};
