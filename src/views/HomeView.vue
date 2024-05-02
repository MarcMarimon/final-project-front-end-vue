<script setup></script>

<template>
  <main class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="gradient-background">
        <div class="hero-content-container">
          <div class="hero-content">
            <h1>Welcome to Your Task Management App</h1>
            <p>
              Organize your tasks and dashboards efficiently with our powerful app. Stay productive
              and achieve your goals seamlessly.
            </p>
            <router-link to="/dashboard" class="link-btn"
              >Get Started <font-awesome-icon icon="rocket"
            /></router-link>
          </div>
          <div class="hero-image">
            <img
              srcset="
                //images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1080 2x
              "
              src="//images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=540"
              alt="An illustration showing different features of a Trello board"
              width="1360"
              height="1200"
              loading="lazy"
              class="Picture__Image-sc-1wdxyb4-0 eYmxm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2>Key Features</h2>
      <p>
        Taskinator 3000's intuitive features give any team the ability to quickly set up and
        customize workflows for just about anything.
      </p>
      <div class="feature-cards-container">
        <div class="feature">
          <div class="feature-icon">
            <font-awesome-icon icon="list-check" />
          </div>
          <div class="feature-details">
            <h3>Task Management</h3>
            <p>Efficiently manage tasks by organizing them into customizable dashboards.</p>
          </div>
        </div>
        <div class="feature">
          <div class="feature-icon">
            <font-awesome-icon icon="columns" />
          </div>
          <div class="feature-details">
            <h3>Custom Dashboards</h3>
            <p>Create and customize dashboards to track your tasks based on different criteria.</p>
          </div>
        </div>
        <div class="feature">
          <div class="feature-icon">
            <font-awesome-icon icon="chart-line" />
          </div>
          <div class="feature-details">
            <h3>Productivity Insights</h3>
            <p>
              <span class="coming-soon-line">"Coming Soon!"</span><br />
              Gain valuable insights into your productivity with built-in analytics and reports.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <div class="testimonial-section-content">
        <h2>What Our Users Say</h2>
        <div class="testimonial">
          <div class="testimonial-avatar">
            <img
              src="https://www.que.es/wp-content/uploads/2022/05/Que-es-Akinator-1-1.jpeg"
              alt="User Avatar"
            />
          </div>
          <div class="testimonial-content-right">
            <div class="testimonial-stars">
              <font-awesome-icon icon="star" /><font-awesome-icon icon="star" /><font-awesome-icon
                icon="star"
              /><font-awesome-icon icon="star" /><font-awesome-icon icon="star" />
            </div>

            <div class="testimonial-details">
              <p>"This app has transformed how I manage my tasks. It's intuitive and powerful!"</p>
              <label><strong>Akinator</strong>, Project Manager</label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <h2>About Our App</h2>
      <div class="about-coments">
        <p>
          Taskinator 3000 is a powerful task management app that helps you organize your tasks and
          dashboards efficiently. With its intuitive interface, you can create and customize
          dashboards to track your tasks based on different criteria.
        </p>
        <p>
          Our task management app is designed to help individuals and teams stay organized,
          collaborate effectively, and achieve their goals. Whether you're a freelancer, a small
          business, or a large corporation, our app is tailored to meet your needs.
        </p>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-content">
        <div class="contact-info">
          <img class="logo-mobile" src="@/assets/images/taskinator logo transp small.png" />
          <h3>Contact Information</h3>
          <address>
            Taskinator3000 SL.<br />
            123 Street, City, Country<br />
            Phone: 123-456-7890<br />
            Email: info@example.com
          </address>
        </div>
        <div class="social-links">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <font-awesome-icon :icon="['fab', 'twitter']" />
              <a href="https://twitter.com/example" target="_blank">Twitter</a>
            </li>
            <li>
              <font-awesome-icon :icon="['fab', 'facebook']" /><a
                href="https://facebook.com/example"
                target="_blank"
                >Facebook</a
              >
            </li>
            <li>
              <font-awesome-icon :icon="['fab', 'instagram']" />
              <a href="https://instagram.com/example" target="_blank">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.home-container {
  margin-top: 80px;
}

.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}
.gradient-background {
  width: 100vw;
  height: 100vh;
  max-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    to left,
    rgb(99, 165, 219) 0%,
    hsla(194, 45%, 75%, 1) 31%,
    hsla(241, 71%, 43%, 1) 90%
  );

  background: -moz-linear-gradient(
    to left,
    rgb(99, 165, 219) 0%,
    hsla(194, 45%, 75%, 1) 31%,
    hsla(241, 71%, 43%, 1) 90%
  );

  background: -webkit-linear-gradient(
    to left,
    rgb(99, 165, 219) 0%,
    hsla(194, 45%, 75%, 1) 31%,
    hsla(241, 71%, 43%, 1) 90%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#A3CFDC", endColorstr="#CF93BD", GradientType=1 );
}
.hero-content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px;
  height: 100%;
  width: 100%;
  max-width: 1400px;
}

.hero-content {
  flex: 1;
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 36px;
}
.hero-content > h1 {
  font-size: 68px;
  line-height: 0.9;
  font-weight: 700;
  color: white;
  margin-bottom: 40px;
  text-shadow: 1px 2px 6px rgba(0, 0, 0, 0.438);
}
.hero-content > p {
  font-family: 'Roboto', sans-serif;
  color: rgb(209, 209, 209);
  font-size: 20px;
  font-weight: 500;
  max-width: 70%;
  margin-bottom: 24px;
}
.hero-content > a {
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  background-color: rgba(121, 162, 224, 0.4);
  color: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  padding: 4px 12px;
}
.hero-content > a:hover {
  background-color: rgba(121, 162, 224, 0.8);
  color: rgba(0, 0, 0);
}

.hero-image {
  max-width: 40%;
  height: 100%;
  object-fit: contain;
}
.hero-image > img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 0px 20px;
}

.features-section {
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 36px;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 4rem;
}
.features-section > h2 {
  font-size: 40px;
  font-weight: 700;
  align-self: flex-start;
}
.features-section > p {
  font-size: 20px;
  color: #7c7a7a;
  align-self: flex-start;
  margin-bottom: 40px;
}
.coming-soon-line {
  font-size: larger;
  color: #303030;
  font-weight: 700;
}
.feature-cards-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;
}
.feature {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  max-width: 250px;
  max-height: 394px;
  background-color: #ece9e9;
  border-radius: 8px;
  flex-grow: 1;
  padding: 36px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.feature:hover {
  transform: scale(1.03);
  filter: brightness(99%);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 16px;
}

.feature-details {
  text-align: center;
}
.feature-details h3 {
  font-size: 36px;
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 30px;
  color: #242424;
  width: 100%;
}
.testimonial-section {
  margin-bottom: 4rem;
  background-color: rgba(104, 153, 226, 0.4);
}
.testimonial-section-content {
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 36px;
  max-width: 1400px;
  margin: 0 auto;
}
.testimonial-section h2 {
  font-size: 40px;
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 30px;
  color: #242424;
  width: 100%;
}

.testimonial {
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 20px 60px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.testimonial-content-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  margin-left: 40px;
  gap: 20px;
}

.testimonial-details p {
  font-size: 30px;
  line-height: 1.1;
  margin-bottom: 20px;
}
.testimonial-details label {
  font-size: 20px;
  color: #242424;
}
.testimonial-details > label > strong {
  font-weight: 700;
}

.testimonial-avatar img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
}

.about-section {
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 36px;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 4rem;
}
.about-section h2 {
  font-size: 40px;
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 30px;
  color: #242424;
  width: 100%;
}
.about-coments {
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 2rem;
  padding: 20px 60px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  gap: 50px;
  height: 250px;
  font-size: 20px;
}

.footer {
  text-align: center;
  background-color: #242424;
  color: rgb(209, 209, 209);
  padding: 36px;
  height: 250px;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.footer-content h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}
.contact-info,
.social-links {
  flex: 1;
  max-width: 50%;
}
.contact-info img {
  width: 70px;
  height: 50px;
}
.social-links {
  margin-top: 50px;
}
.social-links ul {
  list-style: none;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social-links li {
  display: flex;
  align-items: center;
  max-width: 100px;
  width: 100%;
  gap: 0.5rem;
}
@media (max-width: 1024px) {
  .gradient-background {
    min-height: 100vh;
    align-items: center;

    background: linear-gradient(to left, rgb(99, 165, 219) 0%, hsla(241, 71%, 43%, 1) 90%);
    background: -moz-linear-gradient(to left, rgb(99, 165, 219) 0%, hsla(241, 71%, 43%, 1) 90%);
    background: -webkit-linear-gradient(to left, rgb(99, 165, 219) 0%, hsla(241, 71%, 43%, 1) 90%);
  }
  .hero-content-container {
    flex-direction: column;
    height: 100%;
    padding-top: 0;
  }
  .hero-image {
    width: 100%;
    height: 30%;
    flex: 1;
    max-width: unset;
  }
  .hero-content {
    width: 100%;
    height: 70%;
    flex: 1;
    padding-bottom: 0;
  }

  .hero-content h1 {
    font-size: 48px;
  }
  .hero-content p {
    font-size: 16px;
    max-width: unset;
  }
  .feature-cards-container {
    flex-direction: column;
    gap: 20px;
  }
  .feature {
    width: 100%;
    max-width: unset;
    padding: 20px;
    max-height: 215px;
    height: 210px;
  }
  .feature-icon {
    font-size: 2rem;
  }
  .feature-details h3 {
    font-size: 30px;
  }
  .testimonial-section-content {
    flex-direction: column;
  }
  .testimonial-section h2 {
    font-size: 30px;
  }
  .testimonial {
    width: 100%;
    max-width: unset;
    padding: 20px;
  }
  .testimonial-avatar img {
    width: 150px;
    height: 150px;
  }
  .testimonial-details p {
    font-size: 20px;
  }
  .testimonial-details label {
    font-size: 16px;
  }

  .about-section h2 {
    font-size: 30px;
  }
  .about-coments {
    width: 100%;
    height: 100%;
    max-width: unset;
    padding: 10px;
    flex-direction: column;
  }
  .about-coments p {
    font-size: 16px;
  }
}

@media (max-width: 435px) {
  .feature-icon {
    margin-bottom: 0;
  }
  .feature-details > h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .testimonial {
    flex-direction: column;
  }
  .testimonial-stars {
    font-size: 14px;
  }
  .testimonial-avatar img {
    width: 100px;
    height: 100px;
  }
  .testimonial-details p {
    font-size: 18px;
  }
  .testimonial-details label {
    font-size: 16px;
  }
  .footer {
    height: 270px;
  }
}
@media (max-width: 380px) {
  .hero-content > h1 {
    font-size: 36px;
  }
  .hero-image {
    display: none;
  }

  .footer {
    height: 300px;
  }
}
@media (max-width: 330px) {
  .feature {
    height: 350px;
  }
  .feature-icon {
    font-size: 1.5rem;
  }
  .feature-details > h3 {
    font-size: 20px;
  }
  .footer {
    height: 330px;
  }
}
</style>
