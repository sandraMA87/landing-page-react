import React from "react";

const Card = () => {
  return (
    <div className="container mb-3 mt-3">
      <div className="row">
        <div className="col ml-auto">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/21/16/43/spring-733507_1280.jpg"
            class="img-fluid rounded"
          />
          <div class="card-body text-center">
            <h5 class="card-title text-center text-decoration-underline">
              Into the light
            </h5>
            <p class="card-text">
            La primavera es una de las cuatro estaciones del año, que comienza en el hemisferio norte entre el 19 y el 21 de marzo. Es una época de renacimiento y renovación, donde la naturaleza florece y se llena de color.
            </p>
            <a href="#" class="btn btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="col ml-auto">
          <img
            src="https://cdn.pixabay.com/photo/2017/05/01/19/41/japanese-cherry-blossom-2276402_1280.jpg"
            class="img-fluid rounded"
          />
          <div class="card-body text-center">
            <h5 class="card-title text-decoration-underline">
              Blossom flowers
            </h5>
            <p class="card-text">
            La primavera es una temporada perfecta para disfrutar del aire libre y practicar deportes al aire libre. El clima es cálido y agradable, ideal para dar paseos en bicicleta, hacer picnic o simplemente disfrutar de la naturaleza.
            </p>
            <a href="#" class="btn btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="col ml-auto">
          <img
            src="https://cdn.pixabay.com/photo/2021/02/21/14/37/little-bird-6036530_1280.jpg"
            className="img-fluid rounded"
          />
          <div class="card-body text-center">
            <h5 class="card-title text-decoration-underline">
              Cute Birdy
            </h5>
            <p class="card-text">
            La primavera es la época del año en que muchas aves migratorias regresan a sus hogares después de pasar el invierno en climas más cálidos. Es un espectáculo hermoso ver cómo llenan el cielo con sus hermosos colores y sus alegres trinos.
            </p>
            <a href="#" class="btn btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="col ml-auto">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/05/22/18/japanese-cherry-trees-3063992_1280.jpg"
            className="img-fluid rounded"
          />
          <div class="card-body text-center">
            <h5 class="card-title text-decoration-underline">
              More Blossom
            </h5>
            <p class="card-text text-center">
            La primavera es la temporada del amor y el romance, donde todo parece llenarse de vida y energía. Los días se alargan, las flores florecen y la naturaleza parece celebrar la vida y el amor.
            </p>
            <a href="#" className="btn btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
