# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) declare a class called blogpostcontroller that inherits from applicationcontroller - it includes all the methods that will 
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is creating variable called posts and assigning it a value of all the BlogPost objects in the database
    @posts = BlogPost.all
  end

  # ---3) this is the method to get one instance of the blogpost object specified by its unique id number
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) this is the method is part of the create step; it creates a new blogpost object
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) this is also part of the create step; it takes in the blog_post_params and then determines if it is a valid blogpost object, then redirects you to the blogpost
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) this is part of the update step in crud; it sets the variable equal to the current blogpost for editing
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) this is part of the update in crud; it sets the variable to equal the specific blogpost, then calls the update method in sql and passes in the strong params and if its valid send them to the updated blog post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) this next line specifically will send the user to the page of the blog post that failed to delete
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) this private keyword keeps everything after local to the application
  private
  def blog_post_params
    # ---10) this require method is saying that it is required that the object type is a blog_post and to only permit the two data type of title and content to be passed into it
    params.require(:blog_post).permit(:title, :content)
  end
end
