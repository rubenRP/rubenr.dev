<template>
  <div id="page-wrapper">
    <Header />
    <main>
      <section id="start" />
      <section id="body-wrapper" className="section blog-listing">
        <div className="container grid-md">
          <div className="columns">
            <div id="item" className="column col-12">
              <div className="content-item h-entry">
                <div className="content-title text-center">
                  <h2 className="p-name mt-1">Not Found</h2>
                </div>

                <div className="e-content text-center">
                  <p className="mb-5">
                    You just hit a route that doesn&#39;t exist... the sadness.
                  </p>
                  <nuxt-img src="/img/404.gif" alt="404" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <Footer />
</template>

<script setup>
// customise 404 message from script section
const error = useError();
if (error.value.statusCode === 404 || "404") {
  error.value.message = "[script]: Oops! Page not found 😔";
} else {
  console.log("error.statusCode: ", error.value.statusCode);
  console.log("error.message: ", error.value.message);
  clearError({ redirect: "/" });
}
</script>
