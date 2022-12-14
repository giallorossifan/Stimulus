// src/controllers/content_loader_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { url: String , refreshInterval: Number }

  startRefreshing() {
    this.refreshTimer = setInterval(() => {
      this.load()
    }, this.refreshIntervalValue)
  }

  disconnect(){
    this.stopRefreshing()
  }

  connect() {
    this.load()

    if (this.hasRefreshIntervalValue) {
      this.startRefreshing()
    }
  }


    load({ params }) {
      fetch(params.url)
        .then(response => response.text())
        .then(html => this.element.innerHTML = html)
    }
}
