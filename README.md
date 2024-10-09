# Salt Kata Series

## Kata - Prime Factors

#### What you will be working on

Being a software developer involves a lot of logical problem solving and being able to do that in a readable and well structured manner. You should also be able to test your logic to make sure it runs as expected even if you were to refactor your code or make additions to it.

You'll be solving another classic kata today. By the end of the lab we want you to:

- Have gained even better understanding of Node.js.
- Get even better at unit testing and get comfortable Jest more.
- Get better at solving problems as a team.

Testing and linting setup

#### Linting

Set up the project to use ESLint with the recommended lint config. You can find the instructions on how to use our recommended lint tool [here](https://github.com/appliedtechnology/jsfs-lab-lintingDemo).

#### Testing

Set up the project to use the _Jest_ as test runner. You can find the instructions on how to we recommend using it [here](https://github.com/appliedtechnology/jsfs-lab-testingDemo).


### Lab instructions

#### Prime numbers

```text
A Prime Number can be divided completely only by 1 or itself.
It must be a whole number greater than 1.
```

Read more on [Wikipedia](https://en.wikipedia.org/wiki/Prime_number).

#### Factors

```text
Factors are the numbers you multiply together to get another number.
```

Read more on [Wikipedia](https://en.wikipedia.org/wiki/Factorization)

#### Prime Factorization

```text
"Prime Factorization" is finding which prime numbers multiply together to make the original number.
```

Read more on [Math is Fun](https://www.mathsisfun.com/prime-factorization.html)

#### The Kata

Factorize a positive integer number into its prime factors.

| Input | Expected Output |
| ----- | --------------- |
| 1     | []              |
| 2     | [2]             |
| 3     | [3]             |
| 4     | [2,2]           |
| 6     | [2,3]           |
| 8     | [2,2,2]         |
| 9     | [3,3]           |
| 10    | [2,5]           |

#### Additional Requirements

We'll add some requirements on the response format and error handling.

In the response from your module, you should signal to the user **without throwing any errors!** whether the request was successful or not. This means that if the users of your module makes a valid request, they should get a message back that indicates the request was successful and what the result was.
And if they makes an invalid request, e.g. with the argument `-4` or `"foo"`, they should get a message back that says there was an error This means that if the users of your module makes a request with the argument `-4` or `"foo"`, they should get a message that tells them there was an error and some hint about how they can make a correct request.

#### TDD

Develop the code TDD style, i.e. follow the work flow **Red**, **Green**, **Refactor**.

---

Good luck and have fun!
