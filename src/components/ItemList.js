/**
 * Created by jorgeayala on 23/02/2017.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../actions/items';
import { bindActionCreators } from "redux";
import { Modal, Button } from 'react-bootstrap'


function renderRelatedList(related_items) {
    if (related_items.length > 0) {
        return related_items.map((item, index) => (
            <RelatedList key={index} item={item} />
        ));
    }
    else return [];
}

const RelatedList = ({item}) => {
    return (
        <div>
            <li key={item.code}>
                <strong>externalUri:</strong> {item.externalUri}
            </li>
        </div>
    );
};

class ItemList extends Component {
    constructor(props){
        super(props);
        this._onItemClick = this._onItemClick.bind(this);
        this.state = {
            selectedItem : null,
            visible : false
        }
    }

    _onItemClick(item){
        console.log('selecting', item);
        this.setState({selectedItem:item, visible: true});
    }
    _renderModal(){

        if (!this.state.selectedItem) return;
        const hide = () => this.setState({visible : false});
        const related_items = renderRelatedList(this.state.selectedItem.related);
        return(
            <Modal show={this.state.visible} onHide={hide}>
                {/*<Modal.Title>  {this.state.selectedItem.code} </Modal.Title>*/}


                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Selected Competence</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span><strong>Name:</strong> {this.state.selectedItem.name.en}</span><br/>
                    <span><strong>Description:</strong> {this.state.selectedItem.definition.en}</span><br/>
                    <span><strong>Id:</strong> {this.state.selectedItem['@id']}</span><br/>
                    <span><strong>Code:</strong> {this.state.selectedItem.code}</span><br/>
                    <span><strong>framework:</strong> {this.state.selectedItem.framework}</span><br/>

                    {this.state.selectedItem.related.length ? (
                        <span><strong>Related:</strong></span>
                    ):(null)}
                    <ul>
                        { related_items }
                    </ul>



                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className="list-group">
                {this._renderModal()}
                {this.props.items.map((item) => (
                        <a key={item.code} onClick={()=>this._onItemClick(item)} className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                {item.name.en ? (
                                    <h4 className="mb-1"><strong>Name:</strong><br/>{item.name.en}</h4>
                                ): (
                                    <p><strong>Name: </strong>no name provided</p>
                                )}
                            </div>
                            {item.definition.en ? (
                                <p className="mb-1"><strong>Definition:</strong><br/>{item.definition.en}</p>
                            ): (
                                <p className="mb-1"><strong>Definition:</strong><br/>no definition provided</p>
                            )}

                            <p><strong>code:</strong><br/>{item.code}</p>
                        </a>
                ))}
            </div>
        );
    }
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectItem},dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);