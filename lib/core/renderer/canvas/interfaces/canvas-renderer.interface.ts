/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2020 Digitsensitive
 * @description  Juno: Canvas Renderer Interface
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */

export interface ICanvasRenderer {
  name: string;
  width: number;
  height: number;
  antialias: boolean;
  scale?: number;
  fullscreen?: boolean;
}