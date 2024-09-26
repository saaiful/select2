QUnit.module('Defaults - Ajax');

QUnit.test('options are merged recursively with default options', function (assert) {
  var defaults = require('select2/defaults');

  var ajaxDelay = 250;
  var ajaxUrl = 'http://www.test.com';

  var mergedOptions;

  defaults.set('ajax--delay', ajaxDelay);

  mergedOptions = defaults.apply({
    ajax: {
      url: ajaxUrl
    }
  });

  assert.equal(
    mergedOptions.ajax.delay,
    ajaxDelay,
    'Ajax default options are present on the merged options'
  );

  assert.equal(
    mergedOptions.ajax.url,
    ajaxUrl,
    'Ajax provided options are present on the merged options'
  );

  defaults.reset();
});

QUnit.test('more than one default option can be changed via set()', function(assert) {
  var defaults = require('select2/defaults');
  var ajaxDelay = 123;
  var dataDataType = 'xml';
  defaults.set('ajax--delay', ajaxDelay);
  defaults.set('ajax--data-type', dataDataType);

  assert.equal(
      defaults.defaults.ajax.delay,
      ajaxDelay,
      'Both ajax.delay and ajax.dataType present in defaults');
  assert.equal(
    defaults.defaults.ajax.dataType,
    dataDataType,
    'Both ajax.delay and ajax.dataType present in defaults');
  defaults.reset();
});

QUnit.test('selectedData option is merged and applied', function (assert) {
  var defaults = require('select2/defaults');

  var selectedData = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' }
  ];

  // Apply the selectedData to defaults
  defaults.set('selectedData', selectedData);

  var mergedOptions = defaults.apply({
    selectedData: selectedData
  });

  assert.deepEqual(
    mergedOptions.selectedData,
    selectedData,
    'selectedData is correctly set and applied in merged options'
  );

  // Ensure the selectedData is applied when passed as an option
  assert.equal(
    mergedOptions.selectedData.length,
    2,
    'The selectedData array contains two items'
  );

  defaults.reset();
});