import React, { useState, useEffect } from 'react';
import { Div, GlobalStyles, TextAnimate } from './PerfilAnimationStyle.tsx'; 
interface Position {
  x: number;
  y: number;
  z: number;
}

interface TextObject {
  text: string;
  fontSize: number;
}

const getRandomPosition = (): Position => ({
  x: Math.random() * 602,
  y: -50,
  z: Math.random() * 10,
});


const fontSizeschar: number[] = [10, 20];
const fontSizes: number[] = [5, 15, 8];


const generateRandomText = (): TextObject => {
  const useWord: boolean = Math.random() < 0.03;

  if (useWord) {
    const words: string[] = [
      'Vidigal-code',
      'Full-stack',
      'Soft Vidigal',
      'Programming',
    ];
    const randomIndex: number = Math.floor(Math.random() * words.length);
    const fontSize: number = fontSizes[Math.floor(Math.random() * fontSizes.length)];
    return { text: words[randomIndex], fontSize };
  }

  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  const randomIndex: number = Math.floor(Math.random() * characters.length);
  const fontSize: number = fontSizeschar[Math.floor(Math.random() * fontSizeschar.length)];
  return { text: characters.charAt(randomIndex), fontSize };
};


const shuffleArray = (array: Position[]): Position[] => {
  let currentIndex: number = array.length,
    randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const moveTowards = (start: Position, end: Position, speed: number): Position => {
  const distanceX: number = end.x - start.x;
  const distanceY: number = end.y - start.y;
  const distance: number = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  const directionX: number = distanceX / distance;
  const directionY: number = distanceY / distance;

  const movementX: number = directionX * speed;
  const movementY: number = directionY * speed;

  return {
    x: start.x + movementX,
    y: start.y + movementY,
    z: start.z,
  };
};

const PerfilBgAnimation: React.FC = () => {
 
  const [textPositions, setTextPositions] = useState<Array<Position>>(Array.from({ length: 100 }, getRandomPosition));
  const [isMouseOver, setMouseOver] = useState<boolean>(false);
  const randomTexts: Array<TextObject> = Array.from({ length: 100 }, generateRandomText);

  useEffect(() => {
    const intervals = textPositions.map((_, index) => {
        return setInterval(() => {
            setTextPositions((prevPositions) =>
                prevPositions.map((position, i) => {
                    if (i === index) {
                        return moveTowards(position, getRandomPosition(), 5);   
                    } else {
                        return position;
                    }
                })
            );
        }, Math.random() * 1000 + 500);
    });

    return () => {
        intervals.forEach((interval) => clearInterval(interval));
    };
  }, [textPositions]);

  const handleMouseOver = () => {
    setMouseOver(true);
    setTextPositions((prevPositions) => shuffleArray([...prevPositions]));
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <>
      <GlobalStyles />
      <Div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <svg className="BgAnimation__svg" viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg">
          {randomTexts.map((textObj, index) => (
            <TextAnimate
              key={index}
              x={textPositions[index] ? textPositions[index].x : 0}
              y={isMouseOver ? Math.random() * 602 : textPositions[index]?.y || 0}
              style={{
                zIndex: textPositions[index]?.z || 0,
                fontSize: `${textObj.fontSize}px`,
                transformOrigin: 'center center',
                transform: isMouseOver ? 'rotate(360deg)' : 'rotate(0deg)',
              }}
            >
              {textObj.text}
              <animate
                attributeName="y"
                values={`${textPositions[index]?.y || 0};602`}
                dur="4s"
                keyTimes="0;1"
                begin={`${index * 0.1}s`}
                repeatCount="indefinite"
              />
            </TextAnimate>
          ))}
        </svg>
      </Div>
    </>
  );
};

export default PerfilBgAnimation;
