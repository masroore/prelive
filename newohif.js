window.config = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  showStudyList: true,
  dataSources: [
    {
      friendlyName: 'Orthanc local',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'orthanc',
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
        // Note orthanc does not have a singlepart retrieve for pdf or video, so exclude those two.
        singlepart: 'bulkdata',
        // The separate retrieve/decoding of bulkdata URIs to internal blobs which are URL accessible is addressed with this configuration:
        bulkDataURI: {
          enabled: true,
          relativeResolution: 'studies',
          // This is an example config that could potentially be used to fix the retrieve URL
          startsWith: 'http://localhost/',
          prefixWith: '/orthanc/',
        },
        acceptHeader: ['multipart/related; type=application/octet-stream; transfer-syntax=*']
      },
    }],
  defaultDataSourceName: 'orthanc',
};
