import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IBlocklyRegistry } from 'jupyterlab-blockly';

import BlocklyIPyWidgets from './ipywidgets_blocks';

/**
 * Initialization data for the jupyterlab-blockly-widgets extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-blockly-widgets:plugin',
  autoStart: true,
  requires: [IBlocklyRegistry],
  activate: (app: JupyterFrontEnd, blockly: IBlocklyRegistry) => {
    console.log('JupyterLab extension jupyterlab-blockly-widgets is activated!');
    blockly.registerToolbox('ipywidgets', BlocklyIPyWidgets.Toolbox);
  }
};

export default plugin;
