var respecConfig = {
  // => https://github.com/stichting-crow/respec/wiki
  specStatus: "{% if cookiecutter.on_review_track == 'true' %}WD{% else %}DRAFT{% endif %}",
  shortName: "{{ cookiecutter.repository_name }}/{{ cookiecutter.__document_slug }}",
  specType: "{{ cookiecutter.__spec_type }}", // vrije tekst, kleine letter
  imprint: "{{ cookiecutter.publisher }}",
  editors: [
    // alleen `name` is verplicht, https://respec.org/docs/#person
    {
      name: "{{ cookiecutter.first_editor }}",
    },
  ],
  github: "https://github.com/Stichting-CROW/{{ cookiecutter.repository_name }}",
  license: "{{ cookiecutter.license }}",
};
