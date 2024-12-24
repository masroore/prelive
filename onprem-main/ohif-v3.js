window.config = {
    routerBasename: '/ohif',
    extensions: [],
    modes: [],
    showStudyList: false,
    showWarningMessageForCrossOrigin: false,
    showCPUFallbackMessage: true,
    showLoadingIndicator: true,
    strictZSpacingForVolumeViewport: true,
    investigationalUseDialog: {
      option: 'configure',
      days: 180
    },
    dataSources: [
        {
          friendlyName: 'Orthanc local',
          namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
          sourceName: 'dicomweb',
          configuration: {
            name: 'orthanc',
    
            wadoUriRoot: '/orthanc/dicom-web',
            qidoRoot: '/orthanc/dicom-web',
            wadoRoot: '/orthanc/dicom-web',
    
            qidoSupportsIncludeField: false,
            supportsReject: false,
            imageRendering: 'wadors',
            thumbnailRendering: 'wadors',
            enableStudyLazyLoad: true,
            supportsFuzzyMatching: false,
            supportsWildcard: true,
            staticWado: true,
            singlepart: 'bulkdata',
            acceptHeader: [ 'multipart/related; type=application/octet-stream; transfer-syntax=*'],
            bulkDataURI: {
               enabled: true
              // In this scenario, Orthanc is not aware that is being served at http://localhost/orthanc/ so we must tell OHIF to fix
              // the bulkDataURI
           },
          },
        }],
    defaultDataSourceName: 'dicomweb',
    whiteLabeling: {
       /* Optional: Should return a React component to be rendered in the "Logo" section of the application's Top Navigation bar */
       createLogoComponentFn: function (React) {
         return React.createElement(
           'a',
           {
             target: '_blank',
             rel: 'noopener noreferrer',
             className: 'text-white',
           },
           React.createElement('h5', {}, 'FMC ABEOKUTA PACS')
         )
       },
     },
    hotkeys: [
      {
        commandName: 'incrementActiveViewport',
        label: 'Next Viewport',
        keys: ['right'],
      },
      {
        commandName: 'decrementActiveViewport',
        label: 'Previous Viewport',
        keys: ['left'],
      },
      { commandName: 'rotateViewportCW', label: 'Rotate Right', keys: ['r'] },
      { commandName: 'rotateViewportCCW', label: 'Rotate Left', keys: ['l'] },
      { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
      {
        commandName: 'flipViewportHorizontal',
        label: 'Flip Horizontally',
        keys: ['h'],
      },
      {
        commandName: 'flipViewportVertical',
        label: 'Flip Vertically',
        keys: ['v'],
      },
      { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
      { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
      { commandName: 'fitViewportToWindow', label: 'Zoom to Fit', keys: ['='] },
      { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
      { commandName: 'nextImage', label: 'Next Image', keys: ['down'] },
      { commandName: 'previousImage', label: 'Previous Image', keys: ['up'] },
      // {
      //   commandName: 'previousViewportDisplaySet',
      //   label: 'Previous Series',
      //   keys: ['pagedown'],
      // },
      // {
      //   commandName: 'nextViewportDisplaySet',
      //   label: 'Next Series',
      //   keys: ['pageup'],
      // },
      {
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Zoom' },
        label: 'Zoom',
        keys: ['z'],
      },
      // ~ Window level presets
      {
        commandName: 'windowLevelPreset1',
        label: 'W/L Preset 1',
        keys: ['1'],
      },
      {
        commandName: 'windowLevelPreset2',
        label: 'W/L Preset 2',
        keys: ['2'],
      },
      {
        commandName: 'windowLevelPreset3',
        label: 'W/L Preset 3',
        keys: ['3'],
      },
      {
        commandName: 'windowLevelPreset4',
        label: 'W/L Preset 4',
        keys: ['4'],
      },
      {
        commandName: 'windowLevelPreset5',
        label: 'W/L Preset 5',
        keys: ['5'],
      },
      {
        commandName: 'windowLevelPreset6',
        label: 'W/L Preset 6',
        keys: ['6'],
      },
      {
        commandName: 'windowLevelPreset7',
        label: 'W/L Preset 7',
        keys: ['7'],
      },
      {
        commandName: 'windowLevelPreset8',
        label: 'W/L Preset 8',
        keys: ['8'],
      },
      {
        commandName: 'windowLevelPreset9',
        label: 'W/L Preset 9',
        keys: ['9'],
      },
    ],
  };
