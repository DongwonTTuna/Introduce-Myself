package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func login(w http.ResponseWriter, r *http.Request) {
	fmt.Println("method:", r.Method) //リクエストを取得するメソッド
	if r.Method == "GET" {
		t, _ := template.ParseFiles("../web-core/html/index.gtpl")
		t.Execute(w, nil)
	} else {
		r.ParseForm()
		//ログインデータがリクエストされ、ログインのロジック判断が実行されます。
		fmt.Println("username:", r.Form["username"])
		fmt.Println("password:", r.Form["password"])
	}
}

func main() {
	http.HandleFunc("/login", login) //アクセスのルーティングを設定します

	err := http.ListenAndServeTLS(":443", "../../../ssl/origin.pem", "../../../ssl/priv.pem", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
