import { ArcRotateCamera, Engine, Scene, Vector3 } from "@babylonjs/core";

export class World {
  private _engine: Engine;
  private _scene: Scene;
  private _camera: ArcRotateCamera;

  constructor(canvas: HTMLCanvasElement) {
    const antialias = true;
    this._engine = new Engine(canvas, antialias);
    this._scene = new Scene(this._engine);
    const alpha = 0;
    const beta = 0;
    const radius = 50;
    const target = Vector3.Zero();
    this._camera = new ArcRotateCamera("camera", alpha, beta, radius, target, this._scene);
    const noPreventDefault = true;
    this._camera.attachControl(canvas, noPreventDefault);
    this._engine.runRenderLoop(() => {
      this._scene.render();
    });
  }

  get scene() {
    return this._scene;
  }

  public dispose() {
    this._scene.dispose();
    this._engine.dispose();
    this._camera.dispose();
    this._engine.stopRenderLoop();
  }
}
