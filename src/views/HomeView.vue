<script setup></script>

<template>
  <main class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Welcome to Your Task Management App</h1>
        <p>
          Organize your tasks and dashboards efficiently with our powerful app. Stay productive and
          achieve your goals seamlessly.
        </p>
        <router-link to="/dashboard" class="link-btn">Get Started</router-link>
      </div>
      <div class="hero-image">
        <img src="" alt="Task Management App" />
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
  padding: 2rem;
  margin-top: 50px;
  overflow: scroll;
}

.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}

.hero-content {
  flex: 1;
  max-width: 50%;
}

.hero-image {
  flex: 1;
  max-width: 50%;
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
</style>
