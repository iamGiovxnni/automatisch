import defineTrigger from '../../../../helpers/define-trigger';
import newFilesInFolder from './new-files-in-folder';

export default defineTrigger({
  name: 'New Files in Folder',
  key: 'newFilesInFolder',
  pollInterval: 15,
  description:
    'Triggers when a new file is added directly to a specific folder (but not its subfolder).',
  arguments: [
    {
      label: 'Folder',
      key: 'folderId',
      type: 'dropdown' as const,
      required: false,
      description:
        'Check a specific folder for new files. Please note: new files added to subfolders inside the folder you choose here will NOT trigger this flow. Defaults to the top-level folder if none is picked.',
      variables: false,
      source: {
        type: 'query',
        name: 'getDynamicData',
        arguments: [
          {
            name: 'key',
            value: 'listFolders',
          },
        ],
      },
    },
  ],

  async run($) {
    await newFilesInFolder($);
  },
});
