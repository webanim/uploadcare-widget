/* @flow */
/* @jsx h */
import {h} from 'hyperapp'
import {SVG} from '../../SVG/SVG'

type Props = {
  className?: string,
}

/* eslint-disable max-len */
export const IconBack = ({className}: Props) => (
  <SVG
    width='32'
    height='32'
    className={className}>
    <path d='M21.131728,9.06066017 C21.7175144,8.47487373 21.7175144,7.52512627 21.131728,6.93933983 C20.5459415,6.35355339 19.5961941,6.35355339 19.0104076,6.93933983 L9.87867966,16.0710678 L18.9397006,25.1320887 C19.525487,25.7178752 20.4752345,25.7178752 21.0610209,25.1320887 C21.6468074,24.5463023 21.6468074,23.5965548 21.0610209,23.0107684 L14.1213203,16.0710678 L21.131728,9.06066017 Z'/>
  </SVG>
)
