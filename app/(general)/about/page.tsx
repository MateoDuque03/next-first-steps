import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This about page",
};


function about() {
  return (
    <div>
      <h1>About page</h1>
    </div>
  )
}

export default about
