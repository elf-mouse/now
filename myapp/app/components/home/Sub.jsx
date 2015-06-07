import { React, View, BackButton, Container } from 'reapp-kit';

function imageRequire(name) {
  return require('../../../assets/shared/sprite-' + name + '.png');
}

var Images = ['chrono', 'drapeaux', 'f1', 'jeu', 'peinture'].map(imageRequire);

class Display extends React.Component {
  render() {
    return (
      <div className="my-display">Display</div>
    );
  }
}

class Item extends React.Component {
  constructor(...props) {
    super(...props);
  }

  handleClick() {
    //this.props.changeItem(this.props.key);
  }

  render() {
    var className = 'my-item item-' + this.props.key;
    return (
      <div className={className} onClick={this.handleClick.bind(this)}>
        {this.props.name}
      </div>
    );
  }
}

var SubPageComponent = class SubPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <View {...this.props} title="Sub Page" titleLeft={backButton}>
        <Display />
        <div className="my-list">
          <Container>
            {Images.map(function(value, key) {
              return (
                <Item key={key}
                     value={value}
                     name={"Item " + (key + 1)}
                     changeItem={this.changeItem.bind(this)} />
              );
            })}
          </Container>
        </div>
      </View>
    );
  }
}

SubPage.changeItem = function(index) {
  this.setState({
    activeIndex: index
  });
  console.log(this.state.index);
};

export default SubPageComponent;
