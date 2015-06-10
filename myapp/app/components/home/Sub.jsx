import { React, View, BackButton, Container } from 'reapp-kit';

function imageRequire(name) {
  return require('../../../assets/shared/sprite-' + name + '.png');
}

let Images = ['drapeaux', 'chrono', 'f1', 'peinture', 'jeu'].map(imageRequire);

class Display extends React.Component {
  render() {
    return (
      <div className="my-display-wrap">
        <div className="my-display" style={{
          'background-image': 'url(' + Images[this.props.active] + ')',
          'background-repeat': 'no-repeat'
        }}>
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  handleClick() {
    this.props.changeItem(this.props.index);
  }

  render() {
    let className = 'my-item item-' + this.props.index;
    if (this.props.active) {
      className += ' active';
    }
    return (
      <div className={className} onClick={this.handleClick.bind(this)}>
        {this.props.index}
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

  changeItem(index) {
    this.setState({
      activeIndex: index
    });
  }

  getItems(activeIndex) {
    let changeItem = this.changeItem.bind(this);

    return Images.map((value, key) => {
      return <Item key={key}
                   name={value}
                   active={key===activeIndex}
                   changeItem={changeItem} />
    });
  }

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    let activeIndex = this.state.activeIndex;

    return (
      <View {...this.props} title="Sub Page" titleLeft={backButton}>
        <Display active={activeIndex}/>
        <div className="my-list">
          <Container>
            {this.getItems(activeIndex)}
          </Container>
        </div>
      </View>
    );
  }
}

export default SubPageComponent;
