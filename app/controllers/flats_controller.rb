class FlatsController < ApplicationController
  before_action :set_flat, only: [:show, :edit, :destroy, :update]

  def index
    @flats = Flat.all
    @flats = Flat.search_name(params[:filter]) if params[:filter].present?
    @flats = Flat.search_price(params[:price]) if params[:price].present?
  end

  def show

  end

  def new
    @flat = Flat.new
  end

  def create
    @flat = Flat.new(flat_params)
    if @flat.save
      redirect_to flat_path(@flat)
    else
      render :new
    end
  end

  def edit
  end

  def update
    @flat = Flat.new(flat_params)
    if @flat.save
      redirect_to flat_path(@flat)
    else
      render :new
    end
  end

  def destroy
    @flat.delete
    redirect_to flats_path
  end

  private

  def flat_params
    params.require(:flat).permit(:name, :description, :address, :price_per_night, :number_of_guests, :picture_url)
  end

  def set_flat
    @flat = Flat.find(params[:id])
  end

end
