var respecConfig = {
  // => https://github.com/stichting-crow/respec/wiki
  specType: "{{ cookiecutter.specType }}", // vrije tekst
  specStatus: "{% if cookiecutter.on_review_track == 'true' %}WD{% else %}DRAFT{% endif %}", // kies uit https://github.com/Stichting-CROW/respec/wiki/specStatus
  imprint: "crow", // Kies uit http://docs.crow.nl/respec-design/stichting-crow/#logos
  shortName: "{{ cookiecutter.repository_name }}/{{ cookiecutter.document_slug }}",
  editors: [
    {
      name: "{{ cookiecutter.first_editor }}", // verplicht, de rest is optioneel
    },
  ],
  github: "https://github.com/Stichting-CROW/{{ cookiecutter.repository_name }}",
};
