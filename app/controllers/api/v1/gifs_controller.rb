class Api::V1::GifsController < ApplicationController

  def index
    @gifs = Gif.all
    render json: @gifs
  end

  def show
    @gif = Gif.find(params[:id])
    render json: @gif
  end

  def new
    @gif = Gif.new
  end

  def create
    @gif = Gif.new(gif_params)
    if @gif.save
      render json: @gif
    else
      render :new
    end
  end

  private

  def gif_params
    params.require(:gif).permit(:title, :url)
  end

end
