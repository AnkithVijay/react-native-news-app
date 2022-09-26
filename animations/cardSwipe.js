import Animated, { block } from 'react-native-reanimated'
import { State } from 'react-native-gesture-handler'

const { Value } = Animated

export const cardSwipe = (
    translationY,
    dragState,
    velocityY,
    cardHeight,
) => {
    const state = {
        finished: new Value(0),
        velocity: new Value(0),
        position: new Value(0),
        time: new Value(0),
    }

    const config = {
        damping: 12,
        tension: 1,
        friction: 2,
        mass: 0.2,
        stiffness: 121.6,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
        toValue: new Value(0),
    }

    return block([translationY])
}