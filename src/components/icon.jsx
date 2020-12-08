import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Container = styled.div`
  margin: 5px;
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background: #fefefe;
  box-shadow: inset 0 -1px 2px grey;
  transition: all 300ms;
  :active {
    background: #eeeeee;
    box-shadow: inset 0 1px 2px black;
  }
`;

export const Icon = ({ animationData }) => {
  const ref = useRef(null);
  const [anim, setAnim] = useState(null);

  useEffect(() => {
    setAnim(
      Lottie.loadAnimation({
        container: ref.current,
        animationData,
        renderer: 'svg',
        loop: false,
        autoplay: true,
      }),
    );
  }, [animationData]);

  const onClick = () => {
    anim.goToAndPlay(0);
  };

  return <Container ref={ref} onClick={onClick}></Container>;
};
