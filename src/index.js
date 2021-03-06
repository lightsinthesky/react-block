/**
 * Blocks implementation
 * @class
 * @author Andrew Wilson 
 */
import React, {Component} from 'react';

import {registeredBlocks} from './BlockStore';

export default class blocks extends Component {
	
	/** @constructor */
	constructor(props) {
		super(props);
	}

	/**
	 * Render the blocksets
	 */
	render() {
		return (
		    <div>{this.renderBlockSet(this.props.data)}</div>
		);
	}


  renderBlockSet(blockSet, parentId = null) {
    return blockSet.filter(filterblock => filterblock.parentId == parentId).map(block => {
      var blockStyle = block.styles;
      var _blockId = block.id;
      return this.renderBlock(
      	registeredBlocks[block.type], 
      	{...block.data, key: block.id, styles:blockStyle, editable:this.editable},
      	this.renderBlockSet(blockSet,_blockId));
    });
  }

  renderBlock(type, props, children=null) {
    return React.createElement(type, props, children);
  }

	/**
	 * Returns block version
	 * @returns {String}
	 */
	toString() {
		return `Blocks v0.6.0 - ${this.name} (v ${this.version}): ${this.description}`;
	}

}

