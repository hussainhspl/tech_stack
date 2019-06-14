import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

// import console = require('console');

class LibraryList extends Component {
	
	renderItem(library) {
		return <ListItem library={library} />;
		// return console.log('render', library);
	}
	render() {
		console.log('data:', this.props.libraries);
		return (
			<FlatList 
				data={this.props.libraries}
				renderItem={this.renderItem}
				keyExtractor={(library) => library.id.toString()}
			/>
		);
	}
}
const mapStateToProps = state => {
  // console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
