package back

import (
	"net/http"

	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
)

func init() {
	functions.HTTP("helloFunction", helloFunction)
}

func helloFunction(w http.ResponseWriter, r *http.Request) {
	Fprintln(w, "こんにちは")
}
