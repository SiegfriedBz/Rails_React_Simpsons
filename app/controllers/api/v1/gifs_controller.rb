class Api::V1::GifsController < ApplicationController
  before_action :select_gif, only: [:show, :edit, :update, :destroy]

  def index
    @gifs = Gif.all
  end

  def show
  end

  def new
    @gif = Gif.new
  end

  def create
    @gif = Gif.new(gif_params)
    if @gif.save
      redirect_to gifs_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @gif.update(gif_params)
      redirect_to gifs_path
    else
      render :edit
    end
  end

  def destroy
    @gif.destroy
    redirect_to gifs_path
  end

  private

  def gif_params
    params.require(:gif).permit(:title, :url)
  end

  def select_gif
    @gif = Gif.find(params[:id])
  end

end
