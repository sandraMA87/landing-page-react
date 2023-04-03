import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron-container">
      <div className="margin-content">
        <div className="container-fluid py-5 mt-2 ">
          <h1 className="display-5 text-decoration-underline">Welcome to Japan Spring!</h1>
          <p className="col-md fs-4">
            むかしむかし、あるところに、おじいさんとおばあさんが住んでいました。おじいさんは山へしばかりに、おばあさんは川へせんたくに行きました。おばあさんが川でせんたくをしていると、ドンブラコ、ドンブラコと、大きな桃が流れてきました。
            「おや、これは良いおみやげになるわ」
            おばあさんは大きな桃をひろいあげて、家に持ち帰りました。そして、おじいさんとおばあさんが桃を食べようと桃を切ってみると、なんと中から元気の良い男の赤ちゃんが飛び出してきました。
            「これはきっと、神さまがくださったにちがいない」.
          </p>
          <button className="btn btn-dark btn-lg" type="button">
           Sayonara Baby!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
