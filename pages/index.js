
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      data,
    }
  }
};
export default function Home({ data }) {
  return (
    <>
      <h3 style={{ "color": "red", "marginLeft": "40%", "marginBottom": "2%" }}>Company Employee Data</h3>
      {
        data.map((currEle) => {
          return <div key={currEle.id}>
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0 mx-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{currEle.name}</h5>
                    <p className="card-text "><b>Company Name :</b> {currEle.company.name}</p>
                    <p className="card-text"><b>Designation : </b>{currEle.company.catchPhrase}</p>
                    <table class="table">
                      <thead>
                        <tr>
                          
                          <th scope="col">Street</th>
                          <th scope="col">City</th>
                          <th scope="col">Zipcode</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          
                          <td>{currEle.address.street}</td>
                          <td>{currEle.address.city}</td>
                          <td>{currEle.address.zipcode}</td>
                        </tr></tbody>
                    </table>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        })
      }
    </>
  )
}
