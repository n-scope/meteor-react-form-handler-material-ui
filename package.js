Package.describe({
  name: "coniel:react-form-handler-material-ui",
  summary: "Material UI inputs for conielo:react-form-handler" ,
  git: 'https://github.com/coniel/meteor-react-form-handler-material-ui.git',
  version: "0.1.4"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.1");

    // Dependencies
    var dependencies = [
        'react@0.1.10',
        'izzilab:material-ui@0.1.7',
        'coniel:react-form-handler@0.1.3'
    ];
    api.use(dependencies);
    api.imply(dependencies);

    // Shared files
    api.addFiles([
      'lib/components/TextInput.jsx',
      'lib/components/DatePicker.jsx',
      'lib/components/SelectInput.jsx',
      'lib/components/CheckboxInput.jsx',
      // Submit buttons
      'lib/components/SubmitButton.jsx',
      'lib/components/FormActions.jsx',
      'lib/components/SubmitFAB.jsx'
    ]);

    // Exports
    api.export([
      'TextInput',
      'DatePicker',
      'SelectInput',
      'CheckboxInput',
      'SubmitButton',
      'FormActions',
      'SubmitFAB'
]);
});


Package.onTest(function (api) {
    // api.use("tinytest");
    api.use("coniel:react-form-handler-material-ui");
});
