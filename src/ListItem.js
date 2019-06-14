import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from './actions/index';
// import console = require('console');

class ListItem extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	componentWillUpdate() {
		LayoutAnimation.spring();
	}
	renderDescription() {
		const { library, expanded } = this.props;
		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>{library.item.description}</Text>
				</CardSection>
			);
		}
	}
	render() {
		const { id, title } = this.props.library.item;
		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.item.id;
	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
