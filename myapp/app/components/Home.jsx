import { Reapp, React, NestedViewList, View, Button, Container } from 'reapp-kit';

class StartButton extends React.Component {
  render() {
    return (
      <Container pad wrap>
        <Button onTap={() => this.router().transitionTo('sub')}>
          Start
        </Button>
      </Container>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="MyApp" after={<StartButton />}>
          <p>Hello, World!</p>
        </View>
        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(Home);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/
