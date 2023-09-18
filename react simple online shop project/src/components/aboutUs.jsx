import React from "react";

export default function AboutUs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card m-auto">
            <div className="card-header">Welcome to onlineshop</div>
            <div className="card-body">
              {" "}
              this is online shopping webstie which is sipmle and fast Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ad
              iste dolore ex impedit doloremque, magni sequi tempore porro
              voluptates laudantium aliquam consectetur ratione sapiente
              dignissimos totam voluptatem labore quos. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Explicabo cupiditate,
              blanditiis consectetur harum quibusdam, illum quisquam quidem quia
              at, officia alias repellat ducimus totam incidunt cumque veniam
              beatae. Distinctio, dicta. Pariatur ab enim repellat quaerat,
              debitis, commodi culpa asperiores accusantium, voluptatem sit
              voluptate expedita aspernatur exercitationem voluptates
              dignissimos similique ex corrupti velit alias cupiditate adipisci.
              Minima cum blanditiis nobis minus. Odio eveniet impedit voluptate
              ipsa asperiores vero quos nisi non similique provident veniam
              tempore fugit, sapiente, praesentium animi accusantium quod
              labore? Quo qui hic officiis odio esse vel ex exercitationem?
              Beatae eaque culpa similique exercitationem nemo, error mollitia
              modi ab iusto optio ex, impedit aliquid quibusdam cupiditate hic,
              nihil sed doloribus blanditiis odit molestiae voluptatibus magni.
              Quo tenetur repellat impedit! Quas nulla cupiditate a magnam. Vero
              dolorum dolores ducimus provident, impedit est repellendus, libero
              ex doloremque, tempore cupiditate ullam odit maxime accusamus
              saepe molestiae dicta. Ea doloremque at soluta minima. Recusandae
              fugit vitae, natus tempora quibusdam laudantium quia excepturi
              adipisci ducimus voluptatibus, impedit, dolorum dignissimos optio
              sint reiciendis enim! Explicabo nam vel ea ut incidunt, ducimus
              voluptatibus aut provident? Laboriosam! Modi sunt optio nihil
              commodi perferendis similique asperiores enim voluptatibus
              cupiditate nulla ducimus molestiae laborum quos ipsum officiis
              quidem, repudiandae sapiente aspernatur in harum doloribus iste
              iure accusamus. Accusantium, perspiciatis? Incidunt, doloribus
              neque velit nobis saepe laudantium quis quae iste nemo est dolorem
              ipsum commodi consequuntur quia tempora rerum magnam, eligendi
              culpa adipisci? Voluptate minus tempore quia, tempora ut debitis.
              Reprehenderit soluta dolores sunt sint cumque eos animi quod
              molestiae sit quas placeat voluptatem magnam, quos quam similique
              autem vel sequi fugit magni numquam exercitationem modi.
              Necessitatibus aspernatur laborum doloribus. Mollitia, sequi nemo
              voluptatibus odit quia nesciunt exercitationem ratione sapiente
              animi similique reprehenderit placeat fugit deleniti dicta ea
              architecto suscipit esse consectetur? Alias quaerat sint quia
              consequatur, ducimus commodi placeat!
              <div className="card-header">
                <br />
                <br />
                <h3>Give us your feedback</h3>
              </div>
              <div className="card">
                <form action="" className="row">
                  <div className="col-sm-10">
                    <input type="text" placeholder="email" />
                  </div>
                  <div className="col-sm-10">
                    <input
                      className="col-sm-10"
                      type="text"
                      placeholder="name"
                    />
                  </div>
                  <div className="col-sm-10">
                    <textarea
                      className="col-sm-10"
                      name=""
                      id=""
                      cols="10"
                      rows="4"
                      onResize={false}
                    ></textarea>

                    <button className="btn btn-primary" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
