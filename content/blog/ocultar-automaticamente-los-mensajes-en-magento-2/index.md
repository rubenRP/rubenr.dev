---
title: "Ocultar automáticamente los mensajes en Magento 2"
published: true
date: "2018-02-06T20:38:00.000Z"
taxonomy:
  category:
    - Articles
  tag:
    - Magento
hero_classes: "text-light title-h1h2 parallax overlay-dark"
hero_image: 1_B9kmFwQjhRW1kt5l6mq2-Q.jpg
thumbnail: 1_B9kmFwQjhRW1kt5l6mq2-Q.jpg
---

Una de las cosas que echo de menos en Magento 2 es poder ocultar automáticamente los mensajes informativos en cualquier página de la tienda. Modificar el comportamiento no es excesivamente difícil, pero hay que tener un par de cosas claras respecto a como funciona el sistema de mensajes.

En Magento 2 se utiliza Knockout para renderizar los mensajes mediante un observable, por lo que se pueden mostrar mensajes dinámicamente mediante ajax sin recargar la página añadiéndolos con el MessageFactory. Por tanto lo que debemos hacer para añadir un timeout al bloque de mensajes es modificar el observable para manejar el estado de dicho bloque (oculto o no)

**La mejor opción es hacer un pequeño módulo para gestionar estos cambios usando un mixin y modificando el template mediante layout**, pero para este post lo vamos a hacer de un modo más bruto para no perdernos en los detalles del módulo.

### Sobreescritura del bloque de mensajes

Dado que vamos a hacer una sobreescritura copiamos el fichero _vendor/magento/module-theme/view/frontend/templates/messages.phtml_ en _app/design/frontend/vendor/theme/Magento_Theme/templates/messages.phtml_

```html
<div data-bind="scope: 'messages'">
  <div data-bind="visible: isVisible(), click: removeAll">
    <!-- ko if: cookieMessages && cookieMessages.length > 0 -->
    <div
      role="alert"
      data-bind="foreach: { data: cookieMessages, as: 'message' }"
      class="messages"
    >
      <div
        data-bind="attr: {
            class: 'message-' + message.type + ' ' + message.type + ' message',
            'data-ui-id': 'message-' + message.type
        }"
      >
        <div data-bind="html: message.text"></div>
      </div>
    </div>
    <!-- /ko -->
    <!-- ko if: messages().messages && messages().messages.length > 0 -->
    <div
      role="alert"
      data-bind="foreach: { data: messages().messages, as: 'message' }"
      class="messages"
    >
      <div
        data-bind="attr: {
            class: 'message-' + message.type + ' ' + message.type + ' message',
            'data-ui-id': 'message-' + message.type
        }"
      >
        <div data-bind="html: message.text"></div>
      </div>
    </div>
    <!-- /ko -->
  </div>
</div>
<script type="text/x-magento-init">
  { "*": { "Magento_Ui/js/core/app": { "components": { "messages": { "component": "Magento_Theme/js/view/messages" } } } } }
</script>
```

La diferencia respecto al fichero base es la siguiente línea

    data-bind="visible: isVisible(), click: removeAll

Con esto pretendemos controlar si se debe ocultar el mensaje y que se oculte si se hace click sobre el mensaje. Este comportamiento lo vamos a gestionar desde el componente JS

### Sobreescritura del componente JS

Al igual que con el phtml copiamos el fichero *vendor/magento/module-theme/view/frontend/web/js/view/messages.js *en* app/design/frontend/vendor/theme/Magento_Theme/web/js/view/messages.js.*

El código resultante es el siguiente:

```javascript
define([
  "jquery",
  "uiComponent",
  "Magento_Customer/js/customer-data",
  "underscore",
  "jquery/jquery-storageapi",
], function($, Component, customerData, _) {
  "use strict"

  return Component.extend({
    defaults: {
      cookieMessages: [],
      messages: [],
      isHidden: false,
      selector: ".page.messages .messages",
      listens: {
        isHidden: "onHiddenChange",
      },
    },

    /**
     * Extends Component object by storage observable messages.
     */
    initialize: function() {
      this._super()

      this.cookieMessages = $.cookieStorage.get("mage-messages")
      this.messages = customerData.get("messages").extend({
        disposableCustomerData: "messages",
      })

      // Force to clean obsolete messages
      if (!_.isEmpty(this.messages().messages)) {
        customerData.set("messages", {})
      }

      $.cookieStorage.set("mage-messages", "")
    },

    initObservable: function() {
      this._super().observe("isHidden")

      return this
    },

    isVisible: function() {
      return this.isHidden(
        !_.isEmpty(this.messages().messages) || !_.isEmpty(this.cookieMessages)
      )
    },

    removeAll: function() {
      $(self.selector).hide()
    },

    onHiddenChange: function(isHidden) {
      var self = this

      // Hide message block if needed
      if (isHidden) {
        setTimeout(function() {
          $(self.selector).hide()
        }, 5000)
      }
    },
  })
})
```

Se ha modificado tanto los atributos del componente (añadiendo 2) como las funciones _initObservable_, _isVisible_, _removeAll_ y _onHiddenChange_.

En él se puede ver como se añade un parámetro _isHidden_, y un listen para llamar a la función *onHiddenChange *que es la función que se encarga de lanzar el timeout y ocultar el mensaje mediante jQuery.

Este comportamiento se puede ver en los mensajes del checkout, que utilizan un componente de mensajes diferente al de toda la tienda. Con estos cambios los comportamientos quedan unificados.

_Este post ha sido publicado originalmente para el [blog de Interactiv4](http://www.interactiv4.com/blog-es/ocultar-automaticamente-los-mensajes-magento-2-codehacks/)_
