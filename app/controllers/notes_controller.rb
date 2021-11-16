class NotesController < ApplicationController
  def index
    @notes = Note.all
    render component: "Notes", props:{notes:@notes}
  end

  def new
    render component: "NewNote"
  end

  def create
    Note.create(title: params[:note][:title], description: params[:note][:description])
    redirect_to notes_path
  end

  def show
    @note = Note.find(params[:id])
    render component: "oneNote", props: {note:@note}
  end


  # def update
  #   @model_name = Model_name.find(params[:id])
  #   if @model_name.update(model_name_params)
  #     do something
  #   else
  #     render component: 'ModelNameEdit', props: { model_name: @model_name }
  #   end
  # end


  # def destroy
  #   @model_name = Model_name.find(params[:id])
  #   @model_name.destroy
  #   send somewhere
  #   or
  #   Model_name.find(params[:id]).destroy
  #   send somewhere
  # end



end
