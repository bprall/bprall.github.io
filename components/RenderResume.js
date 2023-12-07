import renderNavbar from "./RenderNav.js";

export default function renderResume(resume) {
  const body = document.querySelector("body");
  body.innerHTML = `
    <section class="project">
      <iframe src="${resume}" 
              type="application/pdf" style="width: 100%; height: 100vh;" scrolling="yes"></iframe>
    </section>`;
}