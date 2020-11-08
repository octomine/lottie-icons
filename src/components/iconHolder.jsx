import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Container = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid black;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 0 5px 10px black;
  transition: all 300ms;
  :active {
    background: #eeeeee;
    box-shadow: 0 2px 5px black;
    margin-top: 5px;
  }
`;

export const IconHolder = ({ animationData }) => {
  const ref = useRef(null);
  const [anim, setAnim] = useState(null);

  useEffect(() => {
    console.warn(animationData);
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
