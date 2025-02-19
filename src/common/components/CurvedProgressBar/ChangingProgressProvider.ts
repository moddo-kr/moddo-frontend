import React, { ReactNode } from "react";

interface ChangingProgressProviderProps<T = any> {
  values: T[];
  interval?: number;
  children: (value: T) => ReactNode;
}

interface ChangingProgressProviderState {
  valuesIndex: number;
}

class ChangingProgressProvider<T = any> extends React.Component<
  ChangingProgressProviderProps<T>,
  ChangingProgressProviderState
> {
  static defaultProps = {
    interval: 100,
  };

  state: ChangingProgressProviderState = {
    valuesIndex: 0,
  };

  private intervalId?: number;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState((prevState) => {
        // 값이 배열의 마지막 인덱스에 도달하지 않았다면 계속 증가
        if (prevState.valuesIndex < this.props.values.length - 1) {
          return { valuesIndex: prevState.valuesIndex + 1 };
        } else {
          // 마지막 값(percentage)에 도달하면 interval을 해제하고 멈춤
          clearInterval(this.intervalId);
          return { valuesIndex: prevState.valuesIndex };
        }
      });
    }, this.props.interval!);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;