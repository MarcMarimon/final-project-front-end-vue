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
          <p>Gain valuable insights into your productivity with built-in analytics and reports.</p>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <h2>What Our Users Say</h2>
      <div class="testimonial">
        <div class="testimonial-avatar">
          <img src="" alt="User Avatar" />
        </div>
        <div class="testimonial-details">
          <p>"This app has transformed how I manage my tasks. It's intuitive and powerful!"</p>
          <p><strong>John Doe</strong>, Project Manager</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <h2>About Our App</h2>
      <p>
        Our task management app is designed to help individuals and teams stay organized,
        collaborate effectively, and achieve their goals. Whether you're a freelancer, a small
        business, or a large corporation, our app is tailored to meet your needs.
      </p>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-content">
        <div class="contact-info">
          <h5>Contact Information</h5>
          <address>
            Your Company Name<br />
            123 Street, City, Country<br />
            Phone: 123-456-7890<br />
            Email: info@example.com
          </address>
        </div>
        <div class="social-links">
          <h5>Follow Us</h5>
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
  font-family: 'Roboto', sans-serif;
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
  margin-bottom: 4rem;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.feature {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
  gap: 1rem;
}

.feature-icon {
  font-size: 3rem;
  margin-right: 1rem;
}

.feature-details {
  text-align: left;
}

.testimonial-section {
  text-align: center;
  margin-bottom: 4rem;
}

.testimonial {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.testimonial-avatar {
  margin-right: 1rem;
}

.about-section {
  text-align: center;
  margin-bottom: 4rem;
}

.footer {
  text-align: center;
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.contact-info,
.social-links {
  flex: 1;
  max-width: 50%;
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
}
</style>
