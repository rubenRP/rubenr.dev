<template>
  <div id="page-wrapper">
    <Header />
    <main>
      <section id="start" />
      <section id="body-wrapper" class="section blog-listing">
        <div class="container grid-md">
          <div class="columns">
            <div id="item" class="column col-12">
              <div class="content-item h-entry">
                <div class="content-title text-center">
                  <h2 class="p-name mt-1">Not Found</h2>
                </div>

                <div class="e-content text-center">
                  <p class="mb-5">
                    You just hit a route that doesn&#39;t exist... the sadness.
                  </p>
                  <img src="~/assets/img/404.gif" alt="404" >
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
