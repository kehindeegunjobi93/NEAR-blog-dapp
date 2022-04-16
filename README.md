# Loom Video
https://www.loom.com/share/4ffbe9960e30409292bb2d9715cb530a

# Cloning the project
After cloning the project please run

```
yarn
```
in order to install all of the necessary packages for the project to run correctly.

# Building and Deploying the contract
The contract is located in under the blog-dapp/assembly folders, after editing the contract you can run

```
yarn build:release
```

in order to build the contract and get the .wasm file , 
Next step is to deploy the contract, you can run

```
yarn deploy
```

This will create a test account and deploy the contract into it.

after the contract is deployed, it is necessary to run the following command in the terminal in order to be able to run the contract

export CONTRACT=ACCOUNT_ID

# Running the contract
You can run this contract in the terminal by calling the exported functions

## Create
- Takes 2 parameters (a title and a post). Both are strings.
- Title must be more than a letter.
- Returns a blog data
- **Example call:** blog-dapp % near call $CONTRACT create '{"title":"the title", "post":"the post"}' --accountId $YOUR_ACCOUNT_ID

## GetById
- Takes 1 parameter (the id). A number.
- Id must be a valid positive number.
- Returns a blog data that is that particular id
- **Example call:** blog-dapp % near call $CONTRACT getById '{"id":123456789}' --accountId $YOUR_ACCOUNT_ID

## Get
- Takes 2 parameter (the offset and limit).
- Both parameters must be numbers. 
- Offset paraemeter is the number of blogs to SKIP from the beginning of the data.
- Returns a list of 10 blogs if you do not change the limit parameter value.
- **Example call:** blog-dapp % near call $CONTRACT get '{"offset":0, "limit":10}' --accountId $YOUR_ACCOUNT_ID

## Update
- Takes 2 parameter (the id and updates). The offset parameter is not required though and limit also has a default value of 10.
- Get a blog data that is that particular id and updates it with the updates parameter.
- Changes existing blog with updated data
- **Example call:** blog-dapp % near call $CONTRACT update '{"id":123456778, "updates":{"title":"my new title", "post":"my new post", "published":false} }' --accountId $YOUR_ACCOUNT_ID

## Delete
- Takes 1 parameter (the id). 
- Delete a blog data that carries that particular id.
- **Example call:** blog-dapp % near call $CONTRACT del '{"id":123456778}' --accountId $YOUR_ACCOUNT_ID


# NEAR-blog-dapp
A blog dapp smart contract written in Assembly Script for NEAR protocol

# 1) What will the project do for the user?
User would be able to add blog post, edit blog post, delete blog post and view blog post. Also view single blog post.

# 2) How are you using the features of NEAR Protocol?
I am using features such as Context, math, PersistentUnorderedMap and assert for testing.

# link
https://app.patika.dev/courses/near-developer-course/submit-your-project-plan
