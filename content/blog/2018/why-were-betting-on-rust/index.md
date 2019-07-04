+++
caption = "Image courtesy of Thomas Kvistholt on Unsplash"
categories = ["rust", "future-proofing"]
date = "2018-04-02"
draft = false
illustration = "feature.jpg"
illustrationDescription = "Tangled power and data wires emerge from the rear ports of a server, installed in its rack."
layout = "post"
tags = ["rust", "gotham", "tokio", "future-proofing"]
title = "Why We're Betting on Rust"
authors = ["Nicholas Young"]
+++
Twenty-eighteen marks my seventeenth annual tour as a professional software engineer. I say "annual tour" because it feels like each year is uniquely challenging yet practiced, much in the same way a cycle race is a planned event, but still presents unexpected hurdles to be cleared. In that time, I've learned one lesson; that our industry is in a constant state of flux. Always. It has been so since the beginning.

Considering how the state of our art is ever changing, I re-evaluate which tools belong in my box of gizmos each year as well. In the past, I've employed [nginx][nginx] as a high-performance cache and proxy, but it has been largely edged out by [Envoy][envoy], which touts a *hybrid [non-blocking][el]* event model and has become wildly successful after being [released in 2016][envoy-release]. That very same principle, *[event-driven][el] [I/O][io]*, is the same reason I chose [Node.js][nodejs] for most of the APIs I've developed since 2011. Even if practices change, we retain successful engineering models.

Beginning late last year, as I sketched our founding mission and initial product offerings, I also decided to select a new primary language that could handle most of our primary development tasks. After writing mostly JavaScript and compile-to-JS languages for half a decade, I longed for something more.

## Modern Languages Bingo

Early this year, having recently designed, built, and released services written in [Erlang][erlang], [Go][golang], [Elixir][elixir], and [Rust][rustlang], I decided to standardize on a primary language for all future work. Because I have previous experience in functional programming, [Haskell][haskell] was on the table also.

The goal was to achieve most development tasks while retaining decent performance. Each language was then measured against the following questions:

**How probable is it that a new engineers author and deploy correct logic within their first week?** Onboarding is a classically difficult concern, especially as a consultancy. Ideally, most of the code we leave behind will be owned by clients. If possible, the language and toolchain we choose should ease processes for anyone coming after us. Once we're following best practices internally, we can easily pass them on.

Out of the options, I greatly preferred Rust's [Cargo][cargo] multipurpose development tool to alternatives. It's tightly integrated with the compiler, `rustc`, and incredibly *friendly*; odd as that may sound. Because of this friendliness, I found myself working with the compiler in a natural rhythm; sketching in code, allowing myself to be led towards best practices.

**Could a prospective language compliment the shift towards multi-platform application development models brought about by Flutter, React Native, and Weex?** This is where Rust's unique ownership model, and the compiler that enforces it, were incredibly valuable.

Rust, as you may know, doesn't require a runtime or virtual machine. It guarantees type safety thanks to [ownership tracking,][ownership] enforced by a static type system. Because of this design choice, which allows elimination of a runtime or virtual machine, [Rust can easily be embedded in other programs today][embedding]. Preliminary tests show that it's relatively simple to build core functionality in Rust and expose it to other frameworks.

**What if scaling out is no longer the goal? Can we deploy to microcontrollers?** There's no better proving ground for modern security practices than the internet-of-things, and Rust is able to run almost anywhere. Of note, [Tock][tock], an embedded operating system for running multiple concurrent, mutually distrustful applications on Cortex-M based microcontrollers.

Further accelerating Tock and similar efforts, the [embedded device working group just kicked off and is rapidly gaining momentum.][embedded]

## Why Rust

A significant portion of my vision for [Uptime Ventures][uv] lies in the belief that computing in the small is equally, if not more important than being able to expand capacity; mostly because it represents a positive future for privacy and data ownership. Imagine a future where data may never leave your home and service degradation is a concern from the past. Rust, a language that somehow merged the best of high level and low-level programming constructs, is but one tool that will help us realize these bold dreams.

While it's useful to maintain proficiency in all of these languages Rust was the clear winner. Not only did it outperform competitors in expressiveness (largely due to functional language features like [iterators and closures][rustbook]), but it has a quickly [growing selection of libraries][crates], including the [high-performance][techempower] evented I/O library, [Tokio][tokio]. I'm at home using [Serde][serde] for data serialization, the object mapper [Diesel][diesel], and [Futures][futures] to manage asynchronous data flows. I've become *productive* quicker than in almost any other language yet&mdash;and I know more than a handful.

In a later post, I'll take you through several of our Rust applications, while demonstrating the web framework that we've chosen, [Gotham][gotham]. Expect guides and tutorials on these topics to begin appearing soon.

When paired with our modern DevOps pipeline built on Kubernetes, Rust has the potential to redefine how cloud software is written by creating typesafe interfaces between services. We believe that it is now possible to ship faster and more reliably than ever before. That's why we're betting on Rust.

[nginx]: https://en.wikipedia.org/wiki/Nginx
[envoy]: https://blog.envoyproxy.io/envoy-threading-model-a8d44b922310
[envoy-release]:
https://eng.lyft.com/announcing-envoy-c-l7-proxy-and-communication-bus-92520b6c8191
[io]: https://en.wikipedia.org/wiki/Input/output
[el]: https://en.wikipedia.org/wiki/Event_loop
[nodejs]: https://www.nodejs.org/
[golang]: https://www.golang.org/
[erlang]: https://www.erlang.org/
[elixir]: https://www.elixir-lang.org/
[haskell]: https://www.haskell.org/
[rustlang]: https://www.rustlang.org/
[rustbook]:
https://doc.rust-lang.org/book/second-edition/ch13-00-functional-features.html
[embedded]: https://github.com/rust-lang-nursery/embedded-wg
[embedding]:
https://doc.rust-lang.org/1.2.0/book/rust-inside-other-languages.html
[techempower]: https://www.techempower.com/benchmarks/#section=data-r15&hw=ph&test=plaintext
[gotham]: https://gotham.rs/
[tokio]: https://github.com/tokio-rs/tokio
[cargo]: https://doc.rust-lang.org/cargo/
[crates]: https://crates.io
[serde]: https://github.com/serde-rs/serde
[diesel]: https://diesel.rs
[futures]: https://github.com/rust-lang-nursery/futures-rs
[uv]: /
[ownership]: https://doc.rust-lang.org/book/second-edition/ch04-01-what-is-ownership.html
[tock]: https://github.com/helena-project/tock
