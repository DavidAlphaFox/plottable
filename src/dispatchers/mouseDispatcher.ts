///<reference path="../reference.ts" />

module Plottable {
export module Dispatcher {
  export class Mouse extends Abstract.Dispatcher {
    private _mouseover: (location: Point) => any;
    private _mousemove: (location: Point) => any;
    private _mouseout: (location: Point) => any;

    /**
     * Creates a Mouse Dispatcher with the specified target.
     *
     * @param {D3.Selection} target The selection to listen for events on.
     */
    constructor(target: D3.Selection) {
      super(target);

      this._event2Callback["mouseover"] = () => {
        if (this._mouseover != null) {
          this._mouseover(this.getMousePosition());
        }
      };

      this._event2Callback["mousemove"] = () => {
        if (this._mousemove != null) {
          this._mousemove(this.getMousePosition());
        }
      };

      this._event2Callback["mouseout"] = () => {
        if (this._mouseout != null) {
          this._mouseout(this.getMousePosition());
        }
      };
    }

    private getMousePosition(): Point {
      var xy = d3.mouse(this._target.node());
      return {
            x: xy[0],
            y: xy[1]
          };
    }

    /**
     * Attaches a callback to be called on mouseover.
     *
     * @param {(location: Point) => any} callback A function that takes the pixel position of the mouse event.
     * @return {Mouse} The calling Mouse Handler.
     */
    public mouseover(callback: (location: Point) => any) {
      this._mouseover = callback;
      return this;
    }

    /**
     * Attaches a callback to be called on mousemove.
     *
     * @param {(location: Point) => any} callback A function that takes the pixel position of the mouse event.
     * @return {Mouse} The calling Mouse Handler.
     */
    public mousemove(callback: (location: Point) => any) {
      this._mousemove = callback;
      return this;
    }

    /**
     * Attaches a callback to be called on mouseout.
     *
     * @param {(location: Point) => any} callback A function that takes the pixel position of the mouse event.
     * @return {Mouse} The calling Mouse Handler.
     */
    public mouseout(callback: (location: Point) => any) {
      this._mouseout = callback;
      return this;
    }
  }
}
}
