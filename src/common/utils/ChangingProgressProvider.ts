import React, { ReactNode } from 'react';

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
  private intervalId?: number;

  constructor(props: ChangingProgressProviderProps<T>) {
    super(props);
    this.state = {
      valuesIndex: 0,
    };
  }

  componentDidMount() {
    const { values, interval } = this.props;
    this.intervalId = window.setInterval(() => {
      this.setState((prevState) => {
        // 값이 배열의 마지막 인덱스에 도달하지 않았다면 계속 증가
        if (prevState.valuesIndex < values.length - 1) {
          return { valuesIndex: prevState.valuesIndex + 1 };
        }
        // 마지막 값(percentage)에 도달하면 interval을 해제하고 멈춤
        clearInterval(this.intervalId);
        return { valuesIndex: prevState.valuesIndex };
      });
    }, interval!);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { values, children } = this.props;
    const { valuesIndex } = this.state;
    return children(values[valuesIndex]);
  }
}

// defaultProps를 클래스 외부에서 할당
(ChangingProgressProvider as any).defaultProps = {
  interval: 100,
};

export default ChangingProgressProvider;
